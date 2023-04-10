import s from "../styles/Controller.module.css";

{
  /* TODO: Account for distance factors */
}

interface Target {
  designation: string;
  name: string;
  distance: integer;
  type: string;
}

interface Weapon {
  designation: string;
  windageStep: number;
  elevationStep: number;
  base: number;
}

interface controllerProps {
  weapon: Weapon;
  target: Target;
  manualHitPosition: number[];
}

export default function Controller({
  weapon,
  target,
  manualHitPosition,
}: controllerProps) {
  const windageAdjust = Math.round(
    (100 - manualHitPosition[0]) / (weapon.windageStep * 2)
  );
  const elevationAdjust = Math.round(
    (100 - manualHitPosition[1]) / (weapon.elevationStep * 2)
  );

  return (
    <section className={s.container}>
      <h1 className={s.title}>{`${weapon.designation}\n${target.name}`}</h1>
      {manualHitPosition.length === 0 ? (
        <div className={s.placeholder}>
          Auf die Scheibe tippen, um den Treffer festzulegen!
        </div>
      ) : (
        <div className={s.content}>
          <div className={s.display}>
            <div className={s.direction}>
              {windageAdjust > 0
                ? "bei links"
                : windageAdjust < 0
                ? "Bei rechts"
                : "Mittig!"}
            </div>
            <div className={s.amount}>{Math.abs(windageAdjust)}</div>
          </div>
          <div className={s.display}>
            <div className={s.direction}>
              {elevationAdjust > 0
                ? "bei hoch"
                : elevationAdjust < 0
                ? "Bei tief"
                : "Mittig!"}
            </div>
            <div className={s.amount}>{Math.abs(elevationAdjust)}</div>
          </div>
          <div className={s.info}>
            <div
              className={s.steps}
            >{`Verstellschritt seitlich: ${weapon.windageStep}cm`}</div>
            <div
              className={s.steps}
            >{`Verstellschritt Höhe: ${weapon.elevationStep}cm`}</div>
          </div>
        </div>
      )}
    </section>
  );
}
