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

interface Settings{
  sightMode: number;
}

interface controllerProps {
  weapon: Weapon;
  target: Target;
  distance: number;
  manualHitPosition: number[];
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  settings: Settings;
}

export default function Controller({
  weapon,
  target,
  distance,
  manualHitPosition,
  showOptions,
  setShowOptions,
  settings
}: controllerProps) {
  const distanceFactor: number = distance / weapon.base;

  const windageAdjust: number = Math.round(
    (100 - manualHitPosition[0]) / (weapon.windageStep * 2) / distanceFactor
  );
  const elevationAdjust: number = Math.round(
    (100 - manualHitPosition[1]) / (weapon.elevationStep * 2) / distanceFactor
  );

  const prefix: string[] = weapon.designation.split(" - ")

  return (
    <section className={s.container}>
      <h1
        className={s.title}
        onClick={()=>setShowOptions(!showOptions)}
      >{`${prefix[1]}\n${distance}m\n${target.name}`}</h1>
      {manualHitPosition[0] === 999 ? (
        <div className={s.placeholder}>
          Auf die Scheibe tippen, um den Treffer festzulegen!
        </div>
      ) : (
        <div className={s.content}>
          <div className={s.display}>
            <div className={s.direction}>
              {windageAdjust > 0
                ? `${settings.sightMode === 0 ? "bei links" : "nach rechts"}`
                : windageAdjust < 0
                ? `${settings.sightMode === 0 ? "bei rechts" : "nach links"}`
                : "Mittig!"}
            </div>
            <div className={s.amount}>{Math.abs(windageAdjust)}</div>
          </div>
          <div className={s.display}>
            <div className={s.direction}>
              {elevationAdjust > 0
                ? `${settings.sightMode === 0 ? "bei hoch" : "nach unten"}`
                : elevationAdjust < 0
                ? `${settings.sightMode === 0 ? "bei tief" : "nach oben"}`
                : "Mittig!"}
            </div>
            <div className={s.amount}>{Math.abs(elevationAdjust)}</div>
          </div>
          <div className={s.info}>
            <div className={s.steps}>
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2}>{`Verstellschritt Seite:`}</td>
                  </tr>
                  <tr>
                    <td>{`${weapon.windageStep}cm auf ${weapon.base}m`}</td>
                    <td>{`${(weapon.windageStep * distanceFactor).toFixed(
                      2
                    )}cm auf ${distance}m`}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>{`Verstellschritt Höhe:`}</td>
                  </tr>
                  <tr>
                    <td>{`${weapon.elevationStep}cm auf ${weapon.base}m`}</td>
                    <td>{`${(weapon.elevationStep * distanceFactor).toFixed(
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
