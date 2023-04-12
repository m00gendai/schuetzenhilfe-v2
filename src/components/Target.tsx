import Hit from "./Hit";

import s from "../styles/Target.module.css";

interface Target {
  designation: string;
  name: string;
  distance: number;
  type: string;
}

interface targetProps {
  target: Target;
  manualHitPosition: number[];
  setManualHitPosition: React.Dispatch<React.SetStateAction<number[]>>;
  calculatedHitPosition: number;
  setCalculatedHitPosition: React.Dispatch<React.SetStateAction<number>>;
  cursorPosition: number[];
  setCursorPosition: React.Dispatch<React.SetStateAction<number[]>>;
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
  function getManualHitPosition(event: any) {
    const width = event.currentTarget.getBoundingClientRect().width;
    const height = event.currentTarget.getBoundingClientRect().height;
    const sizeConstant = width / 100;
    const xCoordinate = (event.nativeEvent.offsetX / sizeConstant) * 2;
    const yCoordinate = (event.nativeEvent.offsetY / sizeConstant) * 2;
    setCursorPosition([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
    calculateHit([xCoordinate, yCoordinate]);
    return [xCoordinate, yCoordinate];
  }

  function calculateHit(hitPosition: number[]) {
    const x = hitPosition[0];
    const y = hitPosition[1];
    const distToCenter = Math.floor(
      Math.sqrt(Math.pow(x - 100, 2) + Math.pow(y - 100, 2))
    );
    const hit = 100 - distToCenter;
    setCalculatedHitPosition(hit);
  }

  function assignManualHitPosition(event: any) {
    const manualHitPosition: number[] = getManualHitPosition(event);
    setManualHitPosition(manualHitPosition);
  }

  return (
    <section
      className={s.container}
      style={{ backgroundImage: `url("/${target.designation}.jpg")` }}
    >
      {calculatedHitPosition ? (
        <Hit
          score={calculatedHitPosition}
          y={cursorPosition[1]}
          x={cursorPosition[0]}
        />
      ) : null}
      <div
        className={s.overlay}
        onClick={(event: any) => assignManualHitPosition(event)}
      ></div>
    </section>
  );
}
