import Target from "./components/Target";
import Screen from "./components/Screen";
import Controller from "./components/Controller";
import Modal_Options from "./components/Modal_Options";
import Modal_Help from "./components/Modal_Help";

import React, { useState } from "react";

import { targetList } from "./targetList";
import { weaponList } from "./weaponList";

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

  const getInitialDistance = localStorage.getItem("Schützenhilfe_Distanz");
  let initialDistance;
  typeof getInitialDistance === "string"
    ? (initialDistance = JSON.parse(getInitialDistance))
    : (initialDistance = 300);

    const getInitialCustomWindage = localStorage.getItem("Schützenhilfe_Seite");
  let initialCustomWindage;
  typeof getInitialCustomWindage === "string"
    ? (initialCustomWindage = JSON.parse(getInitialCustomWindage))
    : (initialCustomWindage = 1);

    const getInitialCustomElevation = localStorage.getItem("Schützenhilfe_Höhe");
  let initialCustomElevation;
  typeof getInitialCustomElevation === "string"
    ? (initialCustomElevation = JSON.parse(getInitialCustomElevation))
    : (initialCustomElevation = 1);

    const getInitialCustomBase = localStorage.getItem("Schützenhilfe_Referenz");
  let initialCustomBase;
  typeof getInitialCustomBase === "string"
    ? (initialCustomBase = JSON.parse(getInitialCustomBase))
    : (initialCustomBase = 25);

  const [target, setTarget] = useState<Target>(initialTarget);
  const [weapon, setWeapon] = useState<Weapon>(initialWeapon);
  const [distance, setDistance] = useState<number>(initialDistance);
  const [windage, setWindage] = useState<number>(initialCustomWindage);
  const [elevation, setElevation] = useState<number>(initialCustomWindage);
  const [base, setBase] = useState<number>(initialCustomBase)
  const [cursorPosition, setCursorPosition] = useState<number[]>([999, 999]);
  const [manualHitPosition, setManualHitPosition] = useState<number[]>([
    999, 999,
  ]);
  const [calculatedHitPosition, setCalculatedHitPosition] = useState<number>(0);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [showHelp, setShowHelp] = useState<boolean>(false);

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
      />
      <Screen
        hit={calculatedHitPosition}
        showOptions={showOptions}
        setShowOptions={setShowOptions}
        showHelp={showHelp}
        setShowHelp={setShowHelp}
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
