import s from "../styles/Hit.module.css";

import {useRef} from "react"

interface hitProps {
  score: number;
  y: number;
  x: number;
  zoom: number;
}

export default function Hit({ score, y, x, zoom }: hitProps) {

  const hitElement = useRef<HTMLDivElement>(null)

  if (zoom === 1 && hitElement.current != null) {
    hitElement.current.style.transform = 'scale(1,1) translate(-50%, -50%)';
  }
  if (zoom === 2 && hitElement.current != null) {
    hitElement.current.style.transform = 'scale(0.5,0.5) translate(-50%, -50%)';
  }
  if (zoom === 3 && hitElement.current != null) {
    hitElement.current.style.transform = 'scale(0.25,0.25) translate(-50%, -50%)';
  }
  return (
    <div className={s.container} style={{ top: `${y}px`, left: `${x}px` }} ref={hitElement}>
      {score < 0 ? "0" : Math.ceil(score / 10)}
    </div>
  );
}
