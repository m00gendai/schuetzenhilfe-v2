import modal from "../styles/Modal_Globals.module.css"
import s from "../styles/Modal_Options.module.css"
import { GiInfo } from "react-icons/gi"

interface Settings{
    sightMode: number;
    handMode: number
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
                    <p>Bei ...</p>
                    <input type="range" min={0} max={1} value={settings.sightMode} onChange={(event:any)=>handleSightMode(event)}/>
                    <p>Nach ...</p>
                </div>
            </div>
            {/**
            <div className={s.item}>
                <details className={s.factorDetails}>
                    <summary className={s.factorTitle}>Trefferpunktversatz <GiInfo /></summary>
                    <p>
                        Steuert den Abstand zwischen Finger und Trefferanzeige während dem Wischen.
                        Standard ist 50.
                    </p>
                </details>
                <div className={s.wrapper}>
                    <input type="text" inputMode="numeric" className={s.input} placeholder="50"/>
                    </div>
            </div>
            */}
            <div className={s.item}>
                <details className={s.factorDetails}>
                    <summary className={s.factorTitle}>Handmodus <GiInfo /></summary>
                    <p>
                        Steuert die Anordnung der Optionsknöpfe sowie den Trefferpunktversatz 
                        (nach links bei Rechtshändern und umgekehrt).
                    </p>
                </details>
                <div className={s.wrapper}>
                    <p>Rechtshänder</p>
                    <input type="range" min={0} max={1} value={settings.handMode} onChange={(event:any)=>handleHandMode(event)}/>
                    <p>Linkshänder</p>
                </div>
            </div>
        </div>
    )
}