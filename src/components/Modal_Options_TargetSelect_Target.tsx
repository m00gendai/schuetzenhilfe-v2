import s from "../styles/Modal_Options.module.css"

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
    setTarget: React.Dispatch<React.SetStateAction<Target>>
  }
  
  export default function Modal_Options_TargetSelect_Target({spoiler, targetList, setTarget}:modalProps){
    function assignTarget(event: any) {
        const targetImages = document.querySelectorAll(`.${s.targetImage}`);
        for (let target of targetList) {
          if (target.designation === event.currentTarget.id) {
            setTarget(target);
            localStorage.setItem("Schützenhilfe_Ziel", JSON.stringify(target));
          }
        }
        for (let target of targetImages) {
          if (target.id === event.currentTarget.id) {
            target.classList.add("active");
          } else {
            target.classList.remove("active");
          }
        }
      }

    return(
        <div className={s.itemGrid}>
            <h2 className={s.title} >{spoiler.long}</h2>
            <div className={s.itemGridInner}>
              {targetList.map((target) => {
                if (target.type === spoiler.name) {
                  return (
                    <div
                      onClick={(event: any) => assignTarget(event)}
                      key={target.name}
                      className={s.targetImage}
                      id={`${target.designation}`}
                      style={{
                        backgroundImage: `url("${target.designation}.jpg")`,
                      }}
                    >
                      <span className={s.targetName}>{target.name}</span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
    )
}