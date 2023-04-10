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
}

export default function Modal_Options({
  showOptions,
  setShowOptions,
  weapon,
  setWeapon,
  target,
  setTarget,
}: modalProps) {
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
          <select
            name="targets"
            id="select_targets"
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
