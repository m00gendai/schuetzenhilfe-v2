import s from "../styles/Screen.module.css";
import { GiCog, GiMagnifyingGlass, GiMultipleTargets, GiRuleBook } from "react-icons/gi";
import { score10mAirPistol, score10mAirRifle, score2550mPrecision, score25mRapid, score50mRifle } from "../utils/scoreCounters";
import { score300mA_5 } from "../utils/scoreCounters";
import { score50mP_4 } from "../utils/scoreCounters";

interface Target {
  designation: string;
  name: string;
  distance: number;
  type: string;
}

interface screenProps {
  hit: number;
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  reticle: number;
  setReticle: React.Dispatch<React.SetStateAction<number>>;
  target: Target;
}

export default function Screen({
  hit,
  showOptions,
  setShowOptions,
  showHelp,
  setShowHelp,
  zoom,
  setZoom,
  reticle,
  setReticle,
  target,
}: screenProps) {
  const count100:string[] = ["300m_A", "300m_B", "50m_P", "50m_B"]

  let singleDigitCount = 0

  let calculatedScore:number = hit/10

  switch(target.designation){
    case "10m_LG_ISSF": calculatedScore = score10mAirRifle(hit)
    break;
    case "10m_Lupi_ISSF": calculatedScore = score10mAirPistol(hit)
    break;
    case "25m_Schnellfeuer": calculatedScore = score25mRapid(hit)
    break;
    case "25m_Präzision": calculatedScore = score2550mPrecision(hit)
    break;
    case "50m_Präzision": calculatedScore = score2550mPrecision(hit)
    break;
    case "50m_G_10er_SSV": calculatedScore = score50mRifle(hit)
    break;
    case "300m_A": singleDigitCount=score300mA_5(hit)
    break;
    case "50m_P": singleDigitCount=score50mP_4(hit)
  }

  return (
    <section className={s.container}>
      <button className={s.button} title="Einstellungen" onClick={() => setShowOptions(!showOptions)}>
        <GiCog />
      </button>
      <button className={s.button} title="Zielscheibe Vergrössern" onClick={()=>setZoom(zoom === 3 ? 1 : zoom+1)}style={{margin: "0 0 0 0.25rem"}} >
        <GiMagnifyingGlass />
      </button>
      <div className={s.scoreWrapper}>
        <div className={s.score}>{hit < 0 ? "0" :count100.includes(target.designation) ? hit :null}</div>
        <div className={s.score} style={{fontWeight: "bolder", fontSize: "2rem"}}>{hit < 0 ? "0" :Math.ceil(calculatedScore)}</div>
        <div className={s.score}>{hit < 0 ? "0" :singleDigitCount !== 0 ? singleDigitCount : null}</div>
      </div>
      <button className={s.button} title="Trefferanzeige wechseln" onClick={()=>setReticle(reticle === 2 ? 1 : reticle+1)} style={{margin: "0 0.25rem 0 0"}} >
        <GiMultipleTargets />
      </button>
      <button className={s.button} title="Hilfe" onClick={() => setShowHelp(!showHelp)}>
        <GiRuleBook />
      </button>
    </section>
  );
}
