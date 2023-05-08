import modal from "../styles/Modal_Globals.module.css"

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
  target: Target;
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
  {name: "G50", long: "Gewehr 50m", dist: 50, visible: false,},
  {name: "G10", long: "Luftgewehr 10m", dist: 10, visible: false,},
  {name: "P10", long: "Luftpistole 10m", dist: 10, visible: false,},
]


export default function Modal_Options_TargetSelect({targetList, setTarget, target}:modalProps){

    return(
      <div className={modal.content}>
        {
          spoilers.map(spoiler =>{
            return <Modal_Options_TargetSelect_Target key={spoiler.name} spoiler={spoiler} targetList={targetList} setTarget={setTarget} target={target}/>
          })
        }
          </div>
    )
}