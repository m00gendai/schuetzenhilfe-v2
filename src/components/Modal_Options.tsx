import CloseIcon from "@mui/icons-material/Close";

import s from "../styles/Modal_Options.module.css";

import {useState} from "react"

import { weaponList } from "../weaponList";
import { targetList } from "../targetList";
import Modal_Options_TargetSelect from "./Modal_Options_TargetSelect";
import Modal_Options_WeaponSelect from "./Modal_Options_WeaponSelect";
import Modal_Options_FactorsSelect from "./Modal_Options_FactorsSelect"

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

  const [showOption, setShowOption] = useState<String>("target")

  const targetListSorted: Target[] = targetList.sort((a, b) => {
    const x: String = a.type;
    const y: String = b.type;
    return x < y ? -1 : x > y ? 1 : 0;
  });
  const weaponListSorted: Weapon[] = weaponList.sort((a, b) => {
    const x: String = a.designation.toString();
    const y: String = b.designation.toString();
    return x < y ? -1 : x > y ? 1 : 0;
  });

  
  
  
  return (
    <aside className={s.veil}>
      <div className={s.modal}>
        <button
          className={s.close}
          onClick={() => setShowOptions(!showOptions)}
        >
          <CloseIcon />
        </button>
        <div className={s.optionSelect}>
          <button onClick={()=>setShowOption("target")}>🞋</button>
          <button onClick={()=>setShowOption("weapon")}>🔫</button>
          <button onClick={()=>setShowOption("factors")}>📐</button>
        </div>
        {showOption === "target" ? 
        <Modal_Options_TargetSelect targetList={targetListSorted} setTarget={setTarget}/> :
        showOption === "weapon" ? 
        <Modal_Options_WeaponSelect weaponList={weaponListSorted} setWeapon={setWeapon} /> :
        <Modal_Options_FactorsSelect distance={distance} setDistance={setDistance} />
        }
      </div>
    </aside>
  );
}
