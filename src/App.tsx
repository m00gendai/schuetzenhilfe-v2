import Target from "./components/Target.tsx";
import Screen from "./components/Screen.tsx";
import Controller from "./components/Controller.tsx";

import { useState } from "react";

import { targetList } from "./targetList.tsx";

import "./styles/globals.css";

function App() {
  const [target, setTarget] = useState<String>("300m_A");
  const [cursorPosition, setCursorPosition] = useState<number[]>([]);
  const [manualHitPosition, setManualHitPosition] = useState<number[]>([0, 0]);
  const [calculatedHitPosition, setCalculatedHitPosition] = useState<number>(0);
  console.log(manualHitPosition);
  return (
    <main>
      <Target
        name={target}
        manualHitPosition={manualHitPosition}
        setManualHitPosition={setManualHitPosition}
        calculatedHitPosition={calculatedHitPosition}
        setCalculatedHitPosition={setCalculatedHitPosition}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
      />
      <Screen hit={calculatedHitPosition} />
      <Controller />
    </main>
  );
}

export default App;
