import Target from "./components/Target.tsx";
import Screen from "./components/Screen.tsx";
import Controller from "./components/Controller.tsx";

import { useState } from "react";

import { targetList } from "./targetList.tsx";
import { weaponList } from "./weaponList.tsx";

import "./styles/globals.css";

interface Target {
  designation: string;
  name: string;
  distance: integer;
  type: string;
}

interface Weapon {
  designation: string;
  windageStep: number;
  elevationStep: number;
  base: number;
}

function App() {
  const [target, setTarget] = useState<Target>({
    designation: "300m_A",
    name: "300m A-Scheibe",
    distance: 300,
    type: "300m Rifle",
  });
  const [weapon, setWeapon] = useState<Weapon>({
    designation: "G - Sturmgewehr 90",
    windageStep: 4.5,
    elevationStep: 4.5,
    base: 300,
  });

  const [cursorPosition, setCursorPosition] = useState<number[]>([]);
  const [manualHitPosition, setManualHitPosition] = useState<number[]>([0, 0]);
  const [calculatedHitPosition, setCalculatedHitPosition] = useState<number>(0);

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
      <Screen hit={calculatedHitPosition} />
      <Controller
        weapon={weapon}
        target={target}
        manualHitPosition={manualHitPosition}
      />
    </main>
  );
}

export default App;
