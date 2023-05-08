import s from "../styles/Modal_Options.module.css";
import modal from "../styles/Modal_Globals.module.css"
import { useEffect } from "react"

interface modalProps{
    distance: number;
  setDistance: React.Dispatch<React.SetStateAction<number>>;
  windage: number;
  setWindage: React.Dispatch<React.SetStateAction<number>>;
  elevation: number;
  setElevation: React.Dispatch<React.SetStateAction<number>>;
  base: number;
  setBase: React.Dispatch<React.SetStateAction<number>>;
  setWeapon: React.Dispatch<React.SetStateAction<Weapon>>;
}

interface Weapon {
  designation: string;
  windageStep: number;
  elevationStep: number;
  base: number;
}

export default function Modal_Options_FactorsSelect({distance, setDistance, windage, setWindage, elevation, setElevation, base, setBase, setWeapon}:modalProps){

    function assignDistance(event: any) {
       setDistance(event.currentTarget.value);
        localStorage.setItem(
          "Schützenhilfe_Distanz",
          JSON.stringify(event.currentTarget.value)
        );     
      }

      function assignCustomBase(event: any) {
        setBase(event.currentTarget.value);
        localStorage.setItem(
          "Schützenhilfe_Referenz",
          JSON.stringify(event.currentTarget.value)
        );
      }

      function assignCustomWindage(event: any) {
        setWindage(event.currentTarget.value);
        localStorage.setItem(
          "Schützenhilfe_Seite",
          JSON.stringify(event.currentTarget.value)
        );
      }

      function assignCustomElevation(event: any) {
        setElevation(event.currentTarget.value);
        localStorage.setItem(
          "Schützenhilfe_Höhe",
          JSON.stringify(event.currentTarget.value)
        );
      }

      /* This re-sets the individual weapon if any of elevation, windage or base change.
         If it wouldn't re-set the infividual weapon, the new values wouldnt be applied until the individual weapon
         is selected manually again. */
      useEffect(()=>{ 
              const d = "I - Individuelle Verstellschritte"
              const w = windage
              const e = elevation
              const b = base
              const custom: Weapon = {designation: d, windageStep: w, elevationStep: e, base: b}
              setWeapon(custom)
              localStorage.setItem("Schützenhilfe_Waffe", JSON.stringify(custom));
          },[windage, elevation, base])

    return(
        <div className={modal.content}>
          <div className={s.item}>
            <h2 className={s.title}>Zieldistanz in Meter</h2>
            <input
              type="number"
              value={distance}
              placeholder="300"
              id="setDistance"
              onChange={(event: any) => assignDistance(event)}
            />
          </div>
          <div className={s.item}>
            <h2 className={s.title}>Referenzdistanz in Meter</h2>
            <input
              type="number"
              value={base}
              placeholder="25"
              id="setsetBase"
              onChange={(event: any) => assignCustomBase(event)}
            />
          </div>
          <div className={s.item}>
            <h2 className={s.title}>Individueller Verstellschritt Seite in Zentimeter</h2>
            <input
              type="number"
              value={windage}
              placeholder="1"
              id="setWindage"
              onChange={(event: any) => assignCustomWindage(event)}
            />
          </div>
          <div className={s.item}>
            <h2 className={s.title}>Individueller Verstellschritt Höhe in Zentimeter</h2>
            <input
              type="number"
              value={elevation}
              placeholder="1"
              id="setElevation"
              onChange={(event: any) => assignCustomElevation(event)}
            />
          </div>
        </div>
    )
}