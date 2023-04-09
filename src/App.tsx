import Target from "./components/Target.tsx";
import Screen from "./components/Screen.tsx";
import Controller from "./components/Controller.tsx";

import { useState } from "react";

import { targetList } from "./targetList.tsx";

import "./styles/globals.css";

function App() {
  const [target, setTarget] = useState<String>("300m_A");

  return (
    <main>
      <Target name={target} />
      <Screen />
      <Controller />
    </main>
  );
}

export default App;
