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

  const [target, setTarget] = useState<Target>(initialTarget);
  const [weapon, setWeapon] = useState<Weapon>(initialWeapon);
  const [distance, setDistance] = useState<number>(initialDistance);
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
        />
      ) : null}
      {showHelp ? (
        <Modal_Help showHelp={showHelp} setShowHelp={setShowHelp} />
      ) : null}
    </main>
  );
}

export default App;
