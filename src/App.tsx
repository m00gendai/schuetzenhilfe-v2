import Target from "./components/Target";
import Screen from "./components/Screen";
import Controller from "./components/Controller";
import Modal_Options from "./components/Modal_Options";
import Modal_Help from "./components/Modal_Help";

import { useState } from "react";

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
  const [target, setTarget] = useState<Target>(
    JSON.parse(localStorage.getItem("Schützenhilfe_Ziel")) || {
      designation: "300m_A",
      name: "300m A-Scheibe",
      distance: 300,
      type: "300m Rifle",
    }
  );
  const [weapon, setWeapon] = useState<Weapon>(
    JSON.parse(localStorage.getItem("Schützenhilfe_Waffe")) || {
      designation: "G - Sturmgewehr 90",
      windageStep: 4.5,
      elevationStep: 4.5,
      base: 300,
    }
  );
  const [distance, setDistance] = useState<number>(
    JSON.parse(localStorage.getItem("Schützenhilfe_Distanz")) || 300
  );
  const [cursorPosition, setCursorPosition] = useState<number[]>([]);
  const [manualHitPosition, setManualHitPosition] = useState<number[]>([]);
  const [calculatedHitPosition, setCalculatedHitPosition] = useState<number>();
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
