import s from "../styles/Modal_Options.module.css"

interface Spoilers{
  prefix: string;
  name: string;
  visible: boolean
  }

  interface Weapon {
    designation: string;
    windageStep: number;
    elevationStep: number;
    base: number;
  }

  interface weaponType{
    prefix: string;
    name: string;
  }

  interface modalProps{
    spoiler: Spoilers;
    weaponList: Weapon[];
    setWeapon: React.Dispatch<React.SetStateAction<Weapon>>;
    base: number;
    windage: number;
    elevation: number;
  }

export default function Modal_Options_WeaponSelect_weapon({spoiler, weaponList, setWeapon, base, windage, elevation}:modalProps){

    function assignWeapon(event: any) {
        const weaponImages = document.querySelectorAll(`.${s.weaponImage}`);
        for (let weapon of weaponList) {
          const prefix: string[] = weapon.designation.split(" - ")
          if (weapon.designation === event.currentTarget.id) {
            if(prefix[0] === "I"){
              const d = weapon.designation
              const w = windage
              const e = elevation
              const b = base
              const custom: Weapon = {designation: d, windageStep: w, elevationStep: e, base: b}
              console.log(custom)
              setWeapon(custom)
              localStorage.setItem("Schützenhilfe_Waffe", JSON.stringify(custom));
            } else {
            setWeapon(weapon);
            localStorage.setItem("Schützenhilfe_Waffe", JSON.stringify(weapon));
            }
          }
        }
        for (let weapon of weaponImages) {
          if (weapon.id === event.currentTarget.id) {
            weapon.classList.add("active");
          } else {
            weapon.classList.remove("active");
          }
        }
      }

      const types: weaponType[] = [
        {prefix: "I", name: "Individuell", },
        {prefix: "G", name: "Gewehre", },
        {prefix: "P", name: "Pistolen", },
        {prefix: "D", name: "Gewehrdiopter", },
        {prefix: "V", name: "Pistolenvisiere", },
        {prefix: "ZF", name: "Zielfernrohre", },
        {prefix: "LP", name: "Gewehr", },
      ]
      
    return(
        <div className={s.itemGrid}>
            <h2 className={s.title}>{spoiler.name}</h2>
            <div className={s.itemGridInner}>            
            {weaponList.map((weapon) => {
                const prefix = weapon.designation.split(" - ")
                if(prefix[0] == spoiler.prefix){
                            return (
                                <div onClick={(event:any)=>assignWeapon(event)} key={weapon.designation} className={s.weaponImage} id={`${weapon.designation}`} style={{backgroundImage: `url("${weapon.designation.replaceAll("/", "_")}.jpg")` ? `url("${weapon.designation.replaceAll("/", "_")}.jpg")` : `url("testbild.png")`}}>
                                    <span className={s.weaponName}>{prefix[1]}</span>
                                </div>
                            )
                         
                }
})}
              </div>
          </div>
    )
}