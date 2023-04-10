import s from "../styles/Modal_Options.module.css";

import { weaponList } from "../weaponList.tsx";

interface Weapon {
  designation: string;
  windageStep: number;
  elevationStep: number;
  base: number;
}

interface modalProps {
  showOptions: boolean;
  setShowOptions(): boolean;
  weapon: Weapon;
  setWeapon(): Weapon;
}

export default function Modal_Options({
  showOptions,
  setShowOptions,
  weapon,
  setWeapon,
}: modalProps) {
  function assignWeapon(event) {
    for (let weapon of weaponList) {
      if (weapon.designation === event.currentTarget.value) {
        setWeapon(weapon);
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
        </div>
      </div>
    </aside>
  );
}
