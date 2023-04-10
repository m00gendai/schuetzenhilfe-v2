import s from "../styles/Screen.module.css";

interface screenProps {
  hit: number;
}

export default function Screen({ hit }: screenProps) {
  console.log(hit);
  return (
    <section className={s.container}>
      <button className={s.button}>O</button>
      <div className={s.score}>{hit < 0 ? "0" : hit}</div>
      <button className={s.button}>?</button>
    </section>
  );
}
