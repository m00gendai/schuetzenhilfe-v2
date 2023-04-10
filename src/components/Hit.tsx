import s from "../styles/Hit.module.css";

interface hitProps {
  score: number;
  y: number;
  x: number;
}

export default function Hit({ score, y, x }: hitProps) {
  return (
    <div className={s.container} style={{ top: `${y}px`, left: `${x}px` }}>
      {score < 0 ? "0" : Math.ceil(score / 10)}
    </div>
  );
}
