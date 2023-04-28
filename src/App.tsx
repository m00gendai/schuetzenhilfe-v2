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

function App() {

  // GET TARGET FROM LOCALSTORAGE OR SET DEFAULT
  const getInitialTarget = localStorage.getItem("Schützenhilfe_Ziel");
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
  const getInitialWeapon = localStorage.getItem("Schützenhilfe_Waffe");
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
  const getInitialDistance = localStorage.getItem("Schützenhilfe_Distanz");
  let initialDistance;
  typeof getInitialDistance === "string"
    ? (initialDistance = JSON.parse(getInitialDistance))
    : (initialDistance = 300);

  // GET WINDAGE FROM LOCALSTORAGE OR SET DEFAULT
    const getInitialCustomWindage = localStorage.getItem("Schützenhilfe_Seite");
  let initialCustomWindage;
  typeof getInitialCustomWindage === "string"
    ? (initialCustomWindage = JSON.parse(getInitialCustomWindage))
    : (initialCustomWindage = 1);

  // GET ELEVATION FROM LOCALSTORAGE OR SET DEFAULT
    const getInitialCustomElevation = localStorage.getItem("Schützenhilfe_Höhe");
  let initialCustomElevation;
  typeof getInitialCustomElevation === "string"
    ? (initialCustomElevation = JSON.parse(getInitialCustomElevation))
    : (initialCustomElevation = 1);

  // GET REFERENCE DISTANCE FROM LOCALSTORAGE OR SET DEFAULT
    const getInitialCustomBase = localStorage.getItem("Schützenhilfe_Referenz");
  let initialCustomBase;
  typeof getInitialCustomBase === "string"
    ? (initialCustomBase = JSON.parse(getInitialCustomBase))
    : (initialCustomBase = 25);

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
      />
      <Controller
        weapon={weapon}
        target={target}
        distance={distance}
        manualHitPosition={manualHitPosition}
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
        />
      ) : null}
      {showHelp ? (
        <Modal_Help showHelp={showHelp} setShowHelp={setShowHelp} />
      ) : null}
    </main>
  );
}

export default App;
