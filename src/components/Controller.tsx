import s from "../styles/Controller.module.css";

interface Target {
  designation: string;
  name: string;
  distance: number;
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
  distance: number;
  manualHitPosition: number[];
}

export default function Controller({
  weapon,
  target,
  distance,
  manualHitPosition,
}: controllerProps) {
  const distanceFactor: number = distance / weapon.base;

  const windageAdjust: number = Math.round(
    (100 - manualHitPosition[0]) / (weapon.windageStep * 2) / distanceFactor
  );
  const elevationAdjust: number = Math.round(
    (100 - manualHitPosition[1]) / (weapon.elevationStep * 2) / distanceFactor
  );

  return (
    <section className={s.container}>
      <h1
        className={s.title}
      >{`${weapon.designation}\n${distance}m\n${target.name}`}</h1>
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
            <div className={s.steps}>
              <table>
                <tbody>
                  <tr>
                    <td>{`Verstellschritt Seite:`}</td>
                  </tr>
                  <tr>
                    <td>{`${weapon.windageStep}cm auf ${weapon.base}m`}</td>
                    <td>{`${(weapon.windageStep / distanceFactor).toFixed(
                      2
                    )}cm auf ${distance}m`}</td>
                  </tr>
                  <tr>
                    <td>{`Verstellschritt Höhe:`}</td>
                  </tr>
                  <tr>
                    <td>{`${weapon.elevationStep}cm auf ${weapon.base}m`}</td>
                    <td>{`${(weapon.elevationStep / distanceFactor).toFixed(
                      2
                    )}cm auf ${distance}m`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
