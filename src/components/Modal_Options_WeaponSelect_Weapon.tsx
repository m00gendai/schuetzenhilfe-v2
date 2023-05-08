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
    base: number;
    windage: number;
    elevation: number;
    spoiler: Spoilers;
    weaponList: Weapon[];
    setWeapon: React.Dispatch<React.SetStateAction<Weapon>>;
    weapon: Weapon;
    
  }

export default function Modal_Options_WeaponSelect_weapon({base, windage, elevation, spoiler, weaponList, setWeapon, weapon}:modalProps){

    function assignWeapon(event: any) {
        const weaponImages = document.querySelectorAll(`.${s.imageContainer}`);
        for (let weapon of weaponList) {
          const prefix: string[] = weapon.designation.split(" - ")
          if (weapon.designation === event.currentTarget.id) {
            if(prefix[0] === "I"){
              const d = weapon.designation
              const w = windage
              const e = elevation
              const b = base
              const custom: Weapon = {designation: d, windageStep: w, elevationStep: e, base: b}
              setWeapon(custom)
              localStorage.setItem("Schützenhilfe_Waffe", JSON.stringify(custom));
            } else {
            setWeapon(weapon);
            localStorage.setItem("Schützenhilfe_Waffe", JSON.stringify(weapon));
            }
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
        <details className={s.itemGrid}>
            <summary className={s.title}>{spoiler.name}</summary>
            <div className={s.itemGridInner}>            
            {weaponList.map((weaponItem) => {
                const prefix = weaponItem.designation.split(" - ")
                if(prefix[0] == spoiler.prefix){
                            return (
                                <div onClick={(event:any)=>assignWeapon(event)} key={weaponItem.designation} 
                                className={weaponItem.designation === weapon.designation ? `${s.imageContainer} active` : `${s.imageContainer}`}
                                id={`${weaponItem.designation}`}>
                                  <div className={s.image} 
                                  style={{backgroundImage: `url("/${prefix[1].replaceAll("/", "_")}.svg")` ? `url("/${prefix[1].replaceAll("/", "_")}.svg")` : `url("testbild.png")`}}></div>
                                    <span className={s.name}>{prefix[1]}</span>
                                </div>
                            )
                         
                }
})}
              </div>
          </details>
    )
}