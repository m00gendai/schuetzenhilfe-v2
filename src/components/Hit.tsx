import s from "../styles/Hit.module.css";
import {GiCrosshair} from "react-icons/gi"
import {useRef} from "react"
import {score25mRapid, score2550mPrecision, score50mRifle, score10mAirRifle, score10mAirPistol} from "../utils/scoreCounters"

interface Target {
  designation: string;
  name: string;
  distance: number;
  type: string;
}

interface hitProps {
  score: number;
  y: number;
  x: number;
  zoom: number;
  reticle: number;
  target: Target;
}

export default function Hit({ score, y, x, zoom, reticle, target }: hitProps) {
  let calculatedScore:number = score/10
  switch(target.designation){
    case "10m_LG_ISSF": calculatedScore = score10mAirRifle(score)
    break;
    case "10m_Lupi_ISSF": calculatedScore = score10mAirPistol(score)
    break;
    case "25m_Schnellfeuer": calculatedScore = score25mRapid(score)
    break;
    case "25m_Präzision": calculatedScore = score2550mPrecision(score)
    break;
    case "50m_Präzision": calculatedScore = score2550mPrecision(score)
    break;
    case "50m_G_10er_SSV": calculatedScore = score50mRifle(score)
    break;
  }

  const hitElement = useRef<HTMLDivElement>(null)

  if (zoom === 1 && hitElement.current != null) {
    hitElement.current.style.transform = 'scale(1,1) translate(-50%, -50%)';
  }
  if (zoom === 2 && hitElement.current != null) {
    hitElement.current.style.transform = 'scale(0.5,0.5) translate(-50%, -50%)';
  }
  if (zoom === 3 && hitElement.current != null) {
    hitElement.current.style.transform = 'scale(0.25,0.25) translate(-50%, -50%)';
  }
  return (
    <div className={`${reticle === 1 ? s.circle : s.x}`} style={{ top: `${y}px`, left: `${x}px` }} ref={hitElement}>
      { reticle === 1 ? score < 0 ? "0" : Math.ceil(calculatedScore) : <GiCrosshair />}
    </div>
  );
}
