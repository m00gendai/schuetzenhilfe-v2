import Hit from "./Hit.tsx";

import s from "../styles/Target.module.css";

interface Target {
  designation: string;
  name: string;
  distance: integer;
  type: string;
}

interface targetProps {
  target: Target;
  manualHitPosition: number[];
  setManualHitPosition(): number[];
  calculatedHitPosition: number;
  setCalculatedHitPosition(): number;
  cursorPosition: number[];
  setCursorPosition(): number[];
}

export default function Target({
  target,
  manualHitPosition,
  setManualHitPosition,
  calculatedHitPosition,
  setCalculatedHitPosition,
  cursorPosition,
  setCursorPosition,
}: targetProps) {
  function getManualHitPosition(event) {
    const width = event.currentTarget.getBoundingClientRect().width;
    const height = event.currentTarget.getBoundingClientRect().height;
    const sizeConstant = width / 100;
    const xCoordinate = (event.nativeEvent.offsetX / sizeConstant) * 2;
    const yCoordinate = (event.nativeEvent.offsetY / sizeConstant) * 2;
    setCursorPosition([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
    calculateHit([xCoordinate, yCoordinate]);
    return [xCoordinate, yCoordinate];
  }

  function calculateHit(hitPosition) {
    const x = hitPosition[0];
    const y = hitPosition[1];
    const distToCenter = Math.floor(
      Math.sqrt(Math.pow(x - 100, 2) + Math.pow(y - 100, 2))
    );
    const hit = 100 - distToCenter;
    setCalculatedHitPosition(hit);
  }

  return (
    <section
      className={s.container}
      style={{ backgroundImage: `url("/${target.designation}.jpg")` }}
    >
      <Hit
        score={calculatedHitPosition}
        y={cursorPosition[1]}
        x={cursorPosition[0]}
      />
      <div
        className={s.overlay}
        onClick={(event: any) =>
          setManualHitPosition(getManualHitPosition(event))
        }
      ></div>
    </section>
  );
}
