import s from "../styles/Screen.module.css";
import { GiCog, GiMagnifyingGlass, GiMultipleTargets, GiRuleBook } from "react-icons/gi";

interface screenProps {
  hit: number;
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  reticle: number;
  setReticle: React.Dispatch<React.SetStateAction<number>>;
}

export default function Screen({
  hit,
  showOptions,
  setShowOptions,
  showHelp,
  setShowHelp,
  zoom,
  setZoom,
  reticle,
  setReticle,
}: screenProps) {
  return (
    <section className={s.container}>
      <button className={s.button} title="Einstellungen" onClick={() => setShowOptions(!showOptions)}>
        <GiCog />
      </button>
      <button className={s.button} title="Zielscheibe Vergrössern" onClick={()=>setZoom(zoom === 3 ? 1 : zoom+1)}style={{margin: "0 0 0 0.25rem"}} >
        <GiMagnifyingGlass />
      </button>
      <div className={s.score}>{hit < 0 ? "0" : hit}</div>
      <button className={s.button} title="Trefferanzeige wechseln" onClick={()=>setReticle(reticle === 2 ? 1 : reticle+1)} style={{margin: "0 0.25rem 0 0"}} >
        <GiMultipleTargets />
      </button>
      <button className={s.button} title="Hilfe" onClick={() => setShowHelp(!showHelp)}>
        <GiRuleBook />
      </button>
    </section>
  );
}
