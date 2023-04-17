import s from "../styles/Modal_Options.module.css"

import Modal_Options_TargetSelect_Target from "./Modal_Options_TargetSelect_Target"

interface Target {
  designation: string;
  name: string;
  distance: number;
  type: string;
}

interface modalProps{
  targetList: Target[];
  setTarget: React.Dispatch<React.SetStateAction<Target>>
}

interface Spoilers{
  name: string;
  long: string;
  dist: number;
  visible: boolean
}

const spoilers: Spoilers[] = [
  {name: "G300", long: "Gewehr 300m", dist: 300, visible: false,},
  {name: "P25", long: "Pistole 25m", dist: 25, visible: false,},
  {name: "P50", long: "Pistole 50m", dist: 50, visible: false,},
  {name: "P10", long: "Luftpistole 10m", dist: 10, visible: false,},
]


export default function Modal_Options_TargetSelect({targetList, setTarget}:modalProps){

    return(
      <div className={s.content}>
        {
          spoilers.map(spoiler =>{
            return <Modal_Options_TargetSelect_Target spoiler={spoiler} targetList={targetList} setTarget={setTarget}/>
          })
        }
          </div>
    )
}