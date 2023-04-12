import CloseIcon from "@mui/icons-material/Close";

import s from "../styles/Modal_Options.module.css";

import { weaponList } from "../weaponList";
import { targetList } from "../targetList";

interface Weapon {
  designation: string;
  windageStep: number;
  elevationStep: number;
  base: number;
}

interface Target {
  designation: string;
  name: string;
  distance: number;
  type: string;
}

interface modalProps {
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  weapon: Weapon;
  setWeapon: React.Dispatch<React.SetStateAction<Weapon>>;
  target: Target;
  setTarget: React.Dispatch<React.SetStateAction<Target>>;
  distance: number;
  setDistance: React.Dispatch<React.SetStateAction<number>>;
}

export default function Modal_Options({
  showOptions,
  setShowOptions,
  weapon,
  setWeapon,
  target,
  setTarget,
  distance,
  setDistance,
}: modalProps) {
  const targetListSorted: Target[] = targetList.sort((a, b) => {
    const x: String = a.distance.toString();
    const y: String = b.distance.toString();
    return x < y ? 1 : x > y ? -1 : 0;
  });
  const weaponListSorted: Weapon[] = weaponList.sort((a, b) => {
    const x: String = a.designation.toString();
    const y: String = b.designation.toString();
    return x < y ? -1 : x > y ? 1 : 0;
  });

  function assignWeapon(event: any) {
    for (let weapon of weaponList) {
      if (weapon.designation === event.currentTarget.value) {
        setWeapon(weapon);
        localStorage.setItem("Schützenhilfe_Waffe", JSON.stringify(weapon));
      }
    }
  }
  function assignTarget(event: any) {
    for (let target of targetList) {
      if (target.designation === event.currentTarget.value) {
        setTarget(target);
        localStorage.setItem("Schützenhilfe_Ziel", JSON.stringify(target));
      }
    }
  }
  function assignDistance(event: any) {
    setDistance(event.currentTarget.value);
    localStorage.setItem(
      "Schützenhilfe_Distanz",
      JSON.stringify(event.currentTarget.value)
    );
  }
  return (
    <aside className={s.veil}>
      <div className={s.modal}>
        <button
          className={s.close}
          onClick={() => setShowOptions(!showOptions)}
        >
          <CloseIcon />
        </button>
        <div className={s.content}>
          <div className={s.item}>
            <h2 className={s.title}>Waffe / Diopter</h2>
            <select
              name="weapons"
              id="select_weapons"
              value={weapon.designation}
              onChange={(event: any) => assignWeapon(event)}
            >
              {weaponListSorted.map((weapon) => {
                return (
                  <option key={weapon.designation} value={weapon.designation}>
                    {weapon.designation}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={s.item}>
            <h2 className={s.title}>Distanz</h2>
            <input
              type="number"
              value={distance}
              placeholder="300"
              id="setDistance"
              onChange={(event: any) => assignDistance(event)}
            />
          </div>
          <div className={s.item}>
            <h2 className={s.title}>Zielscheibe</h2>
            <select
              name="targets"
              id="select_targets"
              value={target.designation}
              onChange={(event: any) => assignTarget(event)}
            >
              {targetList.map((target) => {
                return (
                  <option key={target.designation} value={target.designation}>
                    {target.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}
