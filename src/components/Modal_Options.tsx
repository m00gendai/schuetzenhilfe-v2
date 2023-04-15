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
    const weaponImages = document.querySelectorAll(`.${s.weaponImage}`)
    for (let weapon of weaponList) {
      if (weapon.designation === event.currentTarget.id) {
        setWeapon(weapon);
        localStorage.setItem("Schützenhilfe_Waffe", JSON.stringify(weapon));
      }
    }
    for(let weapon of weaponImages){
      if(weapon.id === event.currentTarget.id){
        weapon.classList.add("active")
      } else {
        weapon.classList.remove("active")
      }
    }
  }
  function assignTarget(event: any) {
    const targetImages = document.querySelectorAll(`.${s.targetImage}`)
    for (let target of targetList) {
      if (target.designation === event.currentTarget.id) {
        setTarget(target);
        localStorage.setItem("Schützenhilfe_Ziel", JSON.stringify(target));
      }
    }
    for(let target of targetImages){
      if(target.id === event.currentTarget.id){
        target.classList.add("active")
      } else {
        target.classList.remove("active")
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
          <div className={s.itemGrid}>
            <h2 className={s.title}>Gewehre</h2>
            <div className={s.itemGridInner}>            
            {weaponList.map((weapon) => {
              const prefix = weapon.designation.split(" - ")
                if(prefix[0] === "G"){
                  return (
                  <div onClick={(event:any)=>assignWeapon(event)} key={weapon.designation} className={s.weaponImage} id={`${weapon.designation}`} style={{backgroundImage: `url("${weapon.designation.replaceAll("/", "_")}.jpg")`}}>
                    <span className={s.targetName}>{prefix[1]}</span>
                  </div>
                );
                  }
              })}
              </div>
          </div>
          <div className={s.itemGrid}>
            <h2 className={s.title}>Gewehrdiopter</h2>
            <div className={s.itemGridInner}>            
            {weaponList.map((weapon) => {
              const prefix = weapon.designation.split(" - ")
                if(prefix[0] === "D"){
                  return (
                  <div onClick={(event:any)=>assignWeapon(event)} key={weapon.designation} className={s.weaponImage} id={`${weapon.designation}`} style={{backgroundImage: `url("${weapon.designation.replaceAll("/", "_")}.jpg")`}}>
                    <span className={s.targetName}>{prefix[1]}</span>
                  </div>
                );
                  }
              })}
              </div>
          </div>
          <div className={s.itemGrid}>
            <h2 className={s.title}>Pistolen</h2>
            <div className={s.itemGridInner}>            
            {weaponList.map((weapon) => {
              const prefix = weapon.designation.split(" - ")
                if(prefix[0] === "P"){
                  return (
                  <div onClick={(event:any)=>assignWeapon(event)} key={weapon.designation} className={s.weaponImage} id={`${weapon.designation}`} style={{backgroundImage: `url("${weapon.designation.replaceAll("/", "_")}.jpg")`}}>
                    <span className={s.targetName}>{prefix[1]}</span>
                  </div>
                );
                  }
              })}
              </div>
          </div>
          <div className={s.itemGrid}>
            <h2 className={s.title}>Pistolenvisiere</h2>
            <div className={s.itemGridInner}>            
            {weaponList.map((weapon) => {
              const prefix = weapon.designation.split(" - ")
                if(prefix[0] === "V"){
                  return (
                  <div onClick={(event:any)=>assignWeapon(event)} key={weapon.designation} className={s.weaponImage} id={`${weapon.designation}`} style={{backgroundImage: `url("${weapon.designation.replaceAll("/", "_")}.jpg")`}}>
                    <span className={s.targetName}>{prefix[1]}</span>
                  </div>
                );
                  }
              })}
              </div>
          </div>
          <div className={s.itemGrid}>
            <h2 className={s.title}>Luftpistolen</h2>
            <div className={s.itemGridInner}>            
            {weaponList.map((weapon) => {
              const prefix = weapon.designation.split(" - ")
                if(prefix[0] === "LP"){
                  return (
                  <div onClick={(event:any)=>assignWeapon(event)} key={weapon.designation} className={s.weaponImage} id={`${weapon.designation}`} style={{backgroundImage: `url("${weapon.designation.replaceAll("/", "_")}.jpg")`}}>
                    <span className={s.targetName}>{prefix[1]}</span>
                  </div>
                );
                  }
              })}
              </div>
          </div>
          <div className={s.itemGrid}>
            <h2 className={s.title}>Zielfernrohre</h2>
            <div className={s.itemGridInner}>            
            {weaponList.map((weapon) => {
              const prefix = weapon.designation.split(" - ")
                if(prefix[0] === "ZF"){
                  return (
                  <div onClick={(event:any)=>assignWeapon(event)} key={weapon.designation} className={s.weaponImage} id={`${weapon.designation}`} style={{backgroundImage: `url("${weapon.designation.replaceAll("/", "_")}.jpg")`}}>
                    <span className={s.targetName}>{prefix[1]}</span>
                  </div>
                );
                  }
              })}
              </div>
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
          <div className={s.itemGrid}>
            <h2 className={s.title}>Zielscheiben Pistole 50m</h2>
            <div className={s.itemGridInner}>            
            {targetList.map((target) => {
                if(target.distance === 50 ){
                  return (
                  <div onClick={(event:any)=>assignTarget(event)} key={target.name} className={s.targetImage} id={`${target.designation}`} style={{backgroundImage: `url("${target.designation}.jpg")`}}>
                    <span className={s.targetName}>{target.name}</span>
                  </div>
                );
                  }
              })}
              </div>
          </div>
          <div className={s.itemGrid}>
            <h2 className={s.title}>Zielscheiben Pistole 25m</h2>
            <div className={s.itemGridInner}>            
            {targetList.map((target) => {
                if(target.distance === 25 ){
                  return (
                  <div onClick={(event:any)=>assignTarget(event)} key={target.name} className={s.targetImage} id={`${target.designation}`} style={{backgroundImage: `url("${target.designation}.jpg")`}}>
                    <span className={s.targetName}>{target.name}</span>
                  </div>
                );
                  }
              })}
              </div>
          </div>
          <div className={s.itemGrid}>
            <h2 className={s.title}>Zielscheiben Gewehr 300m</h2>
            <div className={s.itemGridInner}>            
            {targetList.map((target) => {
                if(target.distance === 300 ){
                  return (
                  <div onClick={(event:any)=>assignTarget(event)} key={target.name} className={s.targetImage} id={`${target.designation}`} style={{backgroundImage: `url("${target.designation}.jpg")`}}>
                    <span className={s.targetName}>{target.name}</span>
                  </div>
                );
                  }
              })}
              </div>
          </div>
          <div className={s.itemGrid}>
            <h2 className={s.title}>Zielscheiben Pistole 10m</h2>
            <div className={s.itemGridInner}>            
            {targetList.map((target) => {
                if(target.distance === 10 ){
                  return (
                  <div onClick={(event:any)=>assignTarget(event)} key={target.name} className={s.targetImage} id={`${target.designation}`} style={{backgroundImage: `url("${target.designation}.jpg")`}}>
                    <span className={s.targetName}>{target.name}</span>
                  </div>
                );
                  }
              })}
              </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
