import s from "../styles/Modal_Options.module.css";
import modal from "../styles/Modal_Globals.module.css"

import { GiArcheryTarget, GiCancel, GiFnFal, GiLuger, GiPencilRuler, GiToggles } from "react-icons/gi"

import { useState } from "react"

import { weaponList } from "../weaponList";
import { targetList } from "../targetList";
import Modal_Options_TargetSelect from "./Modal_Options_TargetSelect";
import Modal_Options_WeaponSelect from "./Modal_Options_WeaponSelect";
import Modal_Options_FactorsSelect from "./Modal_Options_FactorsSelect"
import Modal_Options_Settings from "./Modal_Options_Settings"

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

interface Validation{ 
  distance: boolean;
  base: boolean;
  windage: boolean;
  elevation: boolean;
}

interface Settings{
  sightMode: number;
  handMode: number
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
  windage: number;
  setWindage: React.Dispatch<React.SetStateAction<number>>;
  elevation: number;
  setElevation: React.Dispatch<React.SetStateAction<number>>;
  base: number;
  setBase: React.Dispatch<React.SetStateAction<number>>;
  validated: Validation;
  setValidated: React.Dispatch<React.SetStateAction<Validation>>
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>
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
  windage,
  setWindage,
  elevation,
  setElevation,
  base, 
  setBase,
  validated, 
  setValidated,
  settings,
  setSettings,
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

  function handleClose(){
    if(Object.values(validated).every(val => val)){
      localStorage.setItem("Schusshilfe_validation", JSON.stringify(validated))
      setShowOptions(!showOptions)
    }
  }

  return (
    <aside className={modal.veil}>
      <div className={modal.modal}>
        <div className={modal.buttonRow}>
        <button
          className={modal.closeButton}
          title="Optionsmenü schliessen"
          onClick={() => handleClose()}
        >
          <GiCancel />
        </button>
        </div>
        <div className={s.optionSelect}>
          <button className={showOption === "target" ? `clicked ${s.optionButton}` : `${s.optionButton}`} title="Zielscheibe wählen" onClick={()=>setShowOption("target")}><GiArcheryTarget /></button>
          <button className={showOption === "weapon" ? `clicked ${s.optionButton}` : `${s.optionButton}`} title="Optik wählen" onClick={()=>setShowOption("weapon")}><GiFnFal /><GiLuger /></button>
          <button className={showOption === "factors" ? `clicked ${s.optionButton}` : `${s.optionButton}`} title="Einstellungen vornehmen" onClick={()=>setShowOption("factors")}><GiPencilRuler /></button>
          <button className={showOption === "settings" ? `clicked ${s.optionButton}` : `${s.optionButton}`} title="Optionen" onClick={()=>setShowOption("settings")}><GiToggles /></button>
        </div>
        {showOption === "target" ? 
        <Modal_Options_TargetSelect 
          targetList={targetListSorted} 
          setTarget={setTarget} 
          target={target}
        /> :
        showOption === "weapon" ? 
        <Modal_Options_WeaponSelect 
          base={base} 
          windage={windage} 
          elevation={elevation} 
          weaponList={weaponListSorted} 
          setWeapon={setWeapon} 
          weapon={weapon}
        /> :
        showOption === "factors" ?
        <Modal_Options_FactorsSelect 
          distance={distance} 
          setDistance={setDistance} 
          windage={windage} 
          setWindage={setWindage} 
          elevation={elevation} 
          setElevation={setElevation} 
          base={base} 
          setBase={setBase} 
          weapon={weapon}
          setWeapon={setWeapon} 
          validated={validated}
          setValidated={setValidated}
        /> :
        <Modal_Options_Settings
          settings={settings}
          setSettings={setSettings}
        />
        }
      </div>
    </aside>
  );
}
