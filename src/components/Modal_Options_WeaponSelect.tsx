import s from "../styles/Modal_Options.module.css"

import Modal_Options_WeaponSelect_Weapon from "./Modal_Options_WeaponSelect_Weapon"

interface Weapon {
  designation: string;
  windageStep: number;
  elevationStep: number;
  base: number;
}

interface modalProps{
  weaponList: Weapon[];
  setWeapon: React.Dispatch<React.SetStateAction<Weapon>>
}

interface Spoilers{
  prefix: string;
  name: string;
  visible: boolean
}

const spoilers: Spoilers[] = [
  {prefix: "G", name: "Gewehre", visible: false,},
  {prefix: "D", name: "Gewehrdiopter", visible: false,},
  {prefix: "P", name: "Pistolen", visible: false,},
  {prefix: "V", name: "Pistolenvisiere", visible: false,},
  {prefix: "LP", name: "Luftpistolen", visible: false,},
  {prefix: "ZF", name: "Zielfernrohre", visible: false,},
]


export default function Modal_Options_WeaponSelect({weaponList, setWeapon}:modalProps){
  
    return(
      <div className={s.content}>
        {spoilers.map(spoiler=>{
          return <Modal_Options_WeaponSelect_Weapon key={spoiler.prefix} spoiler={spoiler} weaponList={weaponList} setWeapon={setWeapon}/>
        })}
        
        </div>
     )
}