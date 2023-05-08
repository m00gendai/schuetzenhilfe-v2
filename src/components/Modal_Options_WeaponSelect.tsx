import modal from "../styles/Modal_Globals.module.css"

import Modal_Options_WeaponSelect_Weapon from "./Modal_Options_WeaponSelect_Weapon"

interface Weapon {
  designation: string;
  windageStep: number;
  elevationStep: number;
  base: number;
}

interface modalProps{
  base: number;
  windage: number;
  elevation: number;
  weaponList: Weapon[];
  setWeapon: React.Dispatch<React.SetStateAction<Weapon>>;
  weapon: Weapon;
}

interface Spoilers{
  prefix: string;
  name: string;
  visible: boolean
}

const spoilers: Spoilers[] = [
  {prefix: "I", name: "Individuell", visible: false,},
  {prefix: "G", name: "Gewehre", visible: false,},
  {prefix: "D", name: "Gewehrdiopter", visible: false,},
  {prefix: "P", name: "Pistolen", visible: false,},
  {prefix: "V", name: "Pistolenvisiere", visible: false,},
  {prefix: "LG", name: "Luftgewehrdiopter", visible: false,},
  {prefix: "LP", name: "Luftpistolen", visible: false,},
  {prefix: "ZF", name: "Zielfernrohre", visible: false,},
]


export default function Modal_Options_WeaponSelect({base, windage, elevation, weaponList, setWeapon, weapon}:modalProps){
  
    return(
      <div className={modal.content}>
        {spoilers.map(spoiler=>{
          return <Modal_Options_WeaponSelect_Weapon base={base} windage={windage} elevation={elevation} key={spoiler.prefix} spoiler={spoiler} weaponList={weaponList} setWeapon={setWeapon} weapon={weapon}/>
        })}
        
        </div>
     )
}