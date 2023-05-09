import s from "../styles/Modal_Options.module.css";
import modal from "../styles/Modal_Globals.module.css"
import { useEffect, useRef, useState } from "react"
import { GiConfirmed, GiHazardSign, GiPlayButton } from "react-icons/gi";

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
  validated: Validation;
  setValidated: React.Dispatch<React.SetStateAction<Validation>>;
}

interface Weapon {
  designation: string;
  windageStep: number;
  elevationStep: number;
  base: number;
}

interface Validation{
  distance: boolean;
  base: boolean;
  windage: boolean;
  elevation: boolean;
}

interface ButtonState{
  distance: string;
  base: string;
  windage: string;
  elevation: string;
}

export default function Modal_Options_FactorsSelect({
  distance, 
  setDistance, 
  windage, 
  setWindage, 
  elevation, 
  setElevation, 
  base, 
  setBase, 
  setWeapon, 
  validated, 
  setValidated 
}:modalProps ){

  const distRef = useRef<HTMLInputElement>(null)
  const baseRef = useRef<HTMLInputElement>(null)
  const windRef = useRef<HTMLInputElement>(null)
  const elevRef = useRef<HTMLInputElement>(null)

  const [btnState, setBtnState] = useState<ButtonState>({distance: "valid", base: "valid", windage: "valid", elevation: "valid"})
  console.log(btnState)
  function validate(type: string){
    let inpt 
    switch(type){
      case "distance":
        inpt = distRef.current
        break
      case "base":
        inpt = baseRef.current
        break
      case "windage":
        inpt = windRef.current
        break
      case "elevation":
        inpt = elevRef.current
        break
    }
    if(inpt?.validity.patternMismatch){
      inpt.setCustomValidity("Nur Zahlen (ganz oder dezimal) grösser als Null erlaubt")
    } else if(inpt?.validity.tooLong){
      inpt.setCustomValidity("Eingabe zu lange - fünf Ziffern sind erlaubt")
    }
    else if(inpt?.validity.valueMissing){
      inpt.setCustomValidity("Es muss ein Wert vorhanden sein")
      setBtnState({...btnState, [type]: "error"})
    }else {
      inpt?.setCustomValidity("")
      setValidated({...validated, [type]: true})
        localStorage.setItem(
          `Schusshilfe_${type}`,
          JSON.stringify(inpt?.value)
        ); 
       setBtnState({...btnState, [type]: "valid"})
    }
    inpt?.reportValidity()
  }
  

    function assignDistance(event: any) {
        setDistance(event.currentTarget.value);
        setValidated({...validated, distance: false})
        setBtnState({...btnState, distance: "check"})
      }

      function assignCustomBase(event: any) {
        setBase(event.currentTarget.value);
        setValidated({...validated, base: false})
      }

      function assignCustomWindage(event: any) {
        setWindage(event.currentTarget.value);
        setValidated({...validated, windage: false})
      }

      function assignCustomElevation(event: any) {
        setElevation(event.currentTarget.value);
        setValidated({...validated, elevation: false})
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
            <div className={s.wrapper}>
            <input
            className={s.input}
              type="text"
              inputMode="numeric"
              value={distance}
              pattern="^(?!0\.*0*$)\d+(\.\d+)?$"
              required
              maxLength={5}
              placeholder="300"
              id="setDistance"
              ref={distRef}
              onChange={(event: any) => assignDistance(event)}
            />
            <button className={s.validate} onClick={()=>validate("distance")}>{btnState.distance === "valid" ? <GiConfirmed /> : btnState.distance === "check" ? <GiPlayButton/> : <GiHazardSign />}</button>
            </div>
          </div>
          <div className={s.item}>
            <h2 className={s.title}>Referenzdistanz in Meter</h2>
            <div className={s.wrapper}>
            <input
            className={s.input}
              type="text"
              inputMode="numeric"
              value={base}
              pattern="^(?!0\.*0*$)\d+(\.\d+)?$"
              required
              maxLength={5}
              placeholder="25"
              id="setBase"
              ref={baseRef}
              onChange={(event: any) => assignCustomBase(event)}
            />
            <button className={s.validate} onClick={()=>validate("base")}><GiPlayButton/></button>
            </div>
          </div>
          <div className={s.item}>
            <h2 className={s.title}>Individueller Verstellschritt Seite in Zentimeter</h2>
            <div className={s.wrapper}>
            <input
            className={s.input}
              type="text"
              inputMode="numeric"
              value={windage}
              pattern="^(?!0\.*0*$)\d+(\.\d+)?$"
              required
              maxLength={5}
              placeholder="1.5"
              id="setWindage"
              ref={windRef}
              onChange={(event: any) => assignCustomWindage(event)}
            />
            <button className={s.validate} onClick={()=>validate("windage")}><GiPlayButton/></button>
            </div>
          </div>
          <div className={s.item}>
            <h2 className={s.title}>Individueller Verstellschritt Höhe in Zentimeter</h2>
            <div className={s.wrapper}>
            <input
            className={s.input}
              type="text"
              inputMode="numeric"
              value={elevation}
              pattern="^(?!0\.*0*$)\d+(\.\d+)?$"
              required
              maxLength={5}
              placeholder="1.5"
              id="setElevation"
              ref={elevRef}
              onChange={(event: any) => assignCustomElevation(event)}
            />
            <button className={s.validate} onClick={()=>validate("elevation")}><GiPlayButton/></button>
            </div>
          </div>
        </div>
    )
}