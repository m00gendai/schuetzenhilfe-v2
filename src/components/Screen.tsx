import s from "../styles/Screen.module.css";

interface screenProps {
  hit: number;
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Screen({
  hit,
  showOptions,
  setShowOptions,
  showHelp,
  setShowHelp,
}: screenProps) {
  return (
    <section className={s.container}>
      <button className={s.button} onClick={() => setShowOptions(!showOptions)}>
        ⚙
      </button>
      <div className={s.score}>{hit < 0 ? "0" : hit}</div>
      <button className={s.button} onClick={() => setShowHelp(!showHelp)}>
        ?
      </button>
    </section>
  );
}
