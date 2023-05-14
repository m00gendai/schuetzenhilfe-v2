import modal from "../styles/Modal_Globals.module.css"
import s from "../styles/Modal_Options.module.css"
import { GiInfo } from "react-icons/gi"

interface Settings{
    sightMode: number;
    handMode: number;
    offset: number;
  }

interface ModalProps{
    settings: Settings;
    setSettings: React.Dispatch<React.SetStateAction<Settings>>
}

export default function Modal_Options_Settings({settings, setSettings}:ModalProps){

    function handleSightMode(event:any){
        setSettings({...settings, sightMode: parseInt(event?.currentTarget.value)})
        localStorage.setItem("Schusshilfe_settings", JSON.stringify({...settings, sightMode: parseInt(event?.currentTarget.value)}));
    }

    function handleHandMode(event:any){
        setSettings({...settings, handMode: parseInt(event?.currentTarget.value)})
        localStorage.setItem("Schusshilfe_settings", JSON.stringify({...settings, handMode: parseInt(event?.currentTarget.value)}));
    }

    function handleOffset(event:any){
        setSettings({...settings, offset: parseInt(event?.currentTarget.value)})
        localStorage.setItem("Schusshilfe_settings", JSON.stringify({...settings, offset: parseInt(event?.currentTarget.value)}));
    }

    return(
        <div className={modal.content}>
            <div className={s.item}>
                <details className={s.factorDetails}>
                    <summary className={s.factorTitle}>Richtungsangabe Visierung <GiInfo /></summary>
                    <p>
                        Schaltet die Anzeige der Verstellschritte um zwischen "Bei hoch/tief/links/rechts" und 
                        "Nach unten/oben/rechts/links".
                    </p>
                </details>
                <div className={s.wrapper}>
                    <p className={s.optionLeft}>Bei ...</p>
                    <input className={s.toggle} type="range" min={0} max={1} value={settings.sightMode} onChange={(event:any)=>handleSightMode(event)}/>
                    <p className={s.optionRight}>Nach ...</p>
                </div>
            </div>
            
            <div className={s.item}>
                <details className={s.factorDetails}>
                    <summary className={s.factorTitle}>Trefferpunktversatz <GiInfo /></summary>
                    <p>
                        Steuert den Abstand zwischen Finger und Trefferanzeige während dem Wischen.
                        Standard ist 50, Minimum 0, Maximum 100, Verstellung in 10er-Schritten.
                    </p>
                </details>
                <div className={s.wrapper}>
                <input type="range" name="offset" className={s.toggleFull} min={0} max={100} step={10} value={settings.offset} onChange={(event:any)=>handleOffset(event)}/>
                <label style={{width: "10%"}} htmlFor="offset">{settings.offset}</label>
                    </div>
            </div>
            
            <div className={s.item}>
                <details className={s.factorDetails}>
                    <summary className={s.factorTitle}>Handmodus <GiInfo /></summary>
                    <p>
                        Steuert die Richtung des Trefferpunktversatzes
                        (nach links bei Rechtshändern und umgekehrt).
                    </p>
                </details>
                <div className={s.wrapper}>
                    <p className={s.optionLeft}>Rechtshänder</p>
                    <input type="range" className={s.toggle} min={0} max={1} value={settings.handMode} onChange={(event:any)=>handleHandMode(event)}/>
                    <p className={s.optionRight}>Linkshänder</p>
                </div>
            </div>
        </div>
    )
}