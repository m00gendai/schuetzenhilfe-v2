import s from "../styles/Modal_Options.module.css"
import { useEffect } from "react"

interface Target {
    designation: string;
    name: string;
    distance: number;
    type: string;
  }

  interface Spoilers{
    name: string;
    long: string;
    dist: number;
    visible: boolean
  }

  interface modalProps{
    spoiler: Spoilers;
    targetList: Target[];
    setTarget: React.Dispatch<React.SetStateAction<Target>>;
    target: Target;
  }
  
  export default function Modal_Options_TargetSelect_Target({spoiler, targetList, setTarget, target}:modalProps){
    function assignTarget(event: any) {
        const targetImages = document.querySelectorAll(`.${s.imageContainer}`);
        for (let target of targetList) {
          if (target.designation === event.currentTarget.id) {
            setTarget(target);
            localStorage.setItem("Schützenhilfe_Ziel", JSON.stringify(target));
          }
        }
      }

    return(
        <details className={s.itemGrid}>
            <summary className={s.title} >{spoiler.long}</summary>
            <div className={s.itemGridInner}>
              {targetList.map((targetItem) => {
                if (targetItem.type === spoiler.name) {
                  return (
                    <div
                      onClick={(event: any) => assignTarget(event)}
                      key={targetItem.name}
                      className={targetItem.designation === target.designation ? `${s.imageContainer} active` : `${s.imageContainer}`}
                      id={`${targetItem.designation}`}><div className={s.image}
                      style={{
                        backgroundImage: `url("${targetItem.designation}.jpg")`,
                      }}
                    ></div>
                      <span className={s.name}>{targetItem.name}</span>
                    </div>
                  );
                }
              })}
            </div>
          </details>
    )
}