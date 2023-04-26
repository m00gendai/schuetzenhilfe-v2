import {SettingsButton, RulesButton, ZoomButton} from "../buttons"
import s from "../styles/Screen.module.css";

interface screenProps {
  hit: number;
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
}

export default function Screen({
  hit,
  showOptions,
  setShowOptions,
  showHelp,
  setShowHelp,
  zoom,
  setZoom
}: screenProps) {
  return (
    <section className={s.container}>
      <button className={s.button} name="Einstellungen" onClick={() => setShowOptions(!showOptions)}>
        <SettingsButton />
      </button>
      <button className={s.button} name="Vergrössern" onClick={()=>setZoom(zoom === 3 ? 1 : zoom+1)}style={{margin: "0 0 0 0.25rem"}} >
        <ZoomButton />
      </button>
      <div className={s.score}>{hit < 0 ? "0" : hit}</div>
      <button className={s.button} name="Hilfe" onClick={() => setShowHelp(!showHelp)}>
        <RulesButton />
      </button>
    </section>
  );
}
