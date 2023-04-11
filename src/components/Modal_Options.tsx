import s from "../styles/Modal_Options.module.css";

import { weaponList } from "../weaponList.tsx";
import { targetList } from "../targetList.tsx";

interface Weapon {
  designation: string;
  windageStep: number;
  elevationStep: number;
  base: number;
}

interface Target {
  designation: string;
  name: string;
  distance: integer;
  type: string;
}

interface modalProps {
  showOptions: boolean;
  setShowOptions(): boolean;
  weapon: Weapon;
  setWeapon(): Weapon;
  target: Target;
  setTarget(): Target;
  distance: number;
  setDistance(): number;
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
    const x: String = a.distance;
    const y: String = b.distance;
    return x < y ? 1 : x > y ? -1 : 0;
  });
  console.log(targetListSorted);

  function assignWeapon(event) {
    for (let weapon of weaponList) {
      if (weapon.designation === event.currentTarget.value) {
        setWeapon(weapon);
      }
    }
  }
  function assignTarget(event) {
    for (let target of targetList) {
      if (target.designation === event.currentTarget.value) {
        setTarget(target);
      }
    }
  }
  function assignDistance(event) {
    setDistance(event.currentTarget.value);
  }
  return (
    <aside className={s.veil}>
      <div className={s.modal}>
        <button
          className={s.close}
          onClick={() => setShowOptions(!showOptions)}
        >
          X
        </button>
        <div className={s.content}>
          <select
            name="weapons"
            id="select_weapons"
            value={weapon.designation}
            onChange={(event: any) => assignWeapon(event)}
          >
            {weaponList.map((weapon) => {
              return (
                <option key={weapon.designation} value={weapon.designation}>
                  {weapon.designation}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            value={distance}
            placeholder="300"
            id="setDistance"
            onChange={(event: any) => assignDistance(event)}
          />
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
    </aside>
  );
}
