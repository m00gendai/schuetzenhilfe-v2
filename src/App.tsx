import Target from "./components/Target";
import Screen from "./components/Screen";
import Controller from "./components/Controller";
import Modal_Options from "./components/Modal_Options";
import Modal_Help from "./components/Modal_Help";

import { useState } from "react";

import "./styles/globals.css";

interface Target {
  designation: string;
  name: string;
  distance: number;
  type: string;
}

interface Weapon {
  designation: string;
  windageStep: number;
  elevationStep: number;
  base: number;
}

interface Validation{ 
  distance: boolean;
  base: boolean;
  windage: boolean;
  elevation: boolean;
}

interface Settings{
  sightMode: number;
  handMode: number;
  offset: number;
}

function App() {

  // GET TARGET FROM LOCALSTORAGE OR SET DEFAULT
  const getInitialTarget = localStorage.getItem("Schusshilfe_target");
  let initialTarget;
  typeof getInitialTarget === "string"
    ? (initialTarget = JSON.parse(getInitialTarget))
    : (initialTarget = {
        designation: "300m_A",
        name: "300m A-Scheibe",
        distance: 300,
        type: "300m Rifle",
      });

  // GET WEAPON FROM LOCALSTORAGE OR SET DEFAULT
  const getInitialWeapon = localStorage.getItem("Schusshilfe_weapon");
  let initialWeapon;
  typeof getInitialWeapon === "string"
    ? (initialWeapon = JSON.parse(getInitialWeapon))
    : (initialWeapon = {
        designation: "G - Sturmgewehr 90",
        windageStep: 4.5,
        elevationStep: 4.5,
        base: 300,
      });

  // GET DISTANCE FROM LOCALSTORAGE OR SET DEFAULT
  const getInitialDistance = localStorage.getItem("Schusshilfe_distance");
  let initialDistance;
  typeof getInitialDistance === "string"
    ? (initialDistance = JSON.parse(getInitialDistance))
    : (initialDistance = 300);

  // GET WINDAGE FROM LOCALSTORAGE OR SET DEFAULT
    const getInitialCustomWindage = localStorage.getItem("Schusshilfe_windage");
  let initialCustomWindage;
  typeof getInitialCustomWindage === "string"
    ? (initialCustomWindage = JSON.parse(getInitialCustomWindage))
    : (initialCustomWindage = 1);

  // GET ELEVATION FROM LOCALSTORAGE OR SET DEFAULT
    const getInitialCustomElevation = localStorage.getItem("Schusshilfe_elevation");
  let initialCustomElevation;
  typeof getInitialCustomElevation === "string"
    ? (initialCustomElevation = JSON.parse(getInitialCustomElevation))
    : (initialCustomElevation = 1);

  // GET REFERENCE DISTANCE FROM LOCALSTORAGE OR SET DEFAULT
    const getInitialCustomBase = localStorage.getItem("Schusshilfe_base");
  let initialCustomBase;
  typeof getInitialCustomBase === "string"
    ? (initialCustomBase = JSON.parse(getInitialCustomBase))
    : (initialCustomBase = 25);

  // GET VALIDATION FROM LOCALSTORAGE OR SET DEFAULT
  const getInitialValidation = localStorage.getItem("Schusshilfe_validation");
  let initialValidation;
  typeof getInitialValidation === "string"
    ? (initialValidation = JSON.parse(getInitialValidation))
    : (initialValidation = {distance: true, base: true, windage: true, elevation: true}); // init is true because of the init values

  // GET SETTINGS FROM LOCALSTORAGE OR SET DEFAULT
  const getInitialSettings = localStorage.getItem("Schusshilfe_settings");
  let initialSettings;
  typeof getInitialSettings === "string"
    ? (initialSettings = JSON.parse(getInitialSettings))
    : (initialSettings = {sightMode: 0, handMode: 0, offset: 50})


  const [target, setTarget] = useState<Target>(initialTarget); // assigns the selected target
  const [weapon, setWeapon] = useState<Weapon>(initialWeapon); // assigns the selected weapon
  const [distance, setDistance] = useState<number>(initialDistance); // assigns the selected distance
  const [windage, setWindage] = useState<number>(initialCustomWindage); // assigns the set custom windage
  const [elevation, setElevation] = useState<number>(initialCustomElevation); // assigns the set custom elevation
  const [base, setBase] = useState<number>(initialCustomBase) // assigns the set custom reference distance
  const [cursorPosition, setCursorPosition] = useState<number[]>([999, 999]); // assigns x/y coordinates of cursor click in target container
  const [manualHitPosition, setManualHitPosition] = useState<number[]>([
    999, 999,
  ]); // assigns x/y coordinates of cursor click in target container in reference to its imposed dimensions (usuall-100 to 100)
  const [calculatedHitPosition, setCalculatedHitPosition] = useState<number>(0); // This is the actual hit value in reference to its distance from center 100
  const [showOptions, setShowOptions] = useState<boolean>(false); // toggles Options modal
  const [showHelp, setShowHelp] = useState<boolean>(false); // toggles Help modal
  const [zoom, setZoom] = useState<number>(1) // Sets target zoom in steps
  const [reticle, setReticle] = useState<number>(1) // Sets hit on target variant
  const [validated, setValidated] = useState<Validation>(initialValidation) // Factor Selection validation
  const [settings, setSettings] = useState<Settings>(initialSettings) // Settings object

  return (
    <main>
      <Target
        target={target}
        manualHitPosition={manualHitPosition}
        setManualHitPosition={setManualHitPosition}
        calculatedHitPosition={calculatedHitPosition}
        setCalculatedHitPosition={setCalculatedHitPosition}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        zoom={zoom}
        reticle={reticle}
        settings={settings}
      />
      <Screen
        hit={calculatedHitPosition}
        showOptions={showOptions}
        setShowOptions={setShowOptions}
        showHelp={showHelp}
        setShowHelp={setShowHelp}
        zoom={zoom}
        setZoom={setZoom}
        reticle={reticle}
        setReticle={setReticle}
        target={target}
      />
      <Controller
        weapon={weapon}
        target={target}
        distance={distance}
        manualHitPosition={manualHitPosition}
        showOptions={showOptions}
        setShowOptions={setShowOptions}
        settings={settings}
      />
      {showOptions ? (
        <Modal_Options
          showOptions={showOptions}
          setShowOptions={setShowOptions}
          weapon={weapon}
          setWeapon={setWeapon}
          target={target}
          setTarget={setTarget}
          distance={distance}
          setDistance={setDistance}
          windage={windage}
          setWindage={setWindage}
          elevation={elevation}
          setElevation={setElevation}
          base={base}
          setBase={setBase}
          validated={validated}
          setValidated={setValidated}
          settings={settings}
          setSettings={setSettings}
        />
      ) : null}
      {showHelp ? (
        <Modal_Help showHelp={showHelp} setShowHelp={setShowHelp} />
      ) : null}
    </main>
  );
}

export default App;
