import { useState } from "react";

import { CancelButton, ArrowLeftButton } from "../buttons";

import Modal_Help_Sights_Weapon from "./Modal_Help_Sights_Stgw90";
import { sightsHelp } from "../sightsHelp";

import s from "../styles/Modal_Help_Sights.module.css";

interface modalProps {
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  setChapter: React.Dispatch<React.SetStateAction<String>>;
}

interface Sight {
  weapon: string;
  shotLeft: string;
  shotRight: string;
  shotBelow: string;
  shotAbove: string;
}

export default function Modal_Help_Sights({
  showHelp,
  setShowHelp,
  setChapter,
}: modalProps) {
  const [subchapter, setSubchapter] = useState<String>("sights");
  const [sight, setSight] = useState<Sight>({
    weapon: "Sturmgewehr 90",
    shotLeft: "Uhrzeigersinn",
    shotRight: "Gegenuhrzeigersinn",
    shotBelow: "Uhrzeigersinn",
    shotAbove: "Gegenuhrzeigersinn",
  },)

  function handleSight(sight: Sight){
    setSubchapter("sights_weapon")
    setSight(sight)
  }

  return (
    <>
      {subchapter === "sights" ? (
        <>
          <div className={s.buttonRow}>
            <button className={s.back} name="zurück" onClick={() => setChapter("main")}>
              <ArrowLeftButton />
            </button>
            <button className={s.close} name="schliessen" onClick={() => setShowHelp(!showHelp)}>
              <CancelButton />
            </button>
          </div>
          <div className={s.content}>
            {sightsHelp.map(sight =>{
            return (<div
            className={s.chapter}
            onClick={() => handleSight(sight)}
          >
            <p className={s.chapterTitle}>{sight.weapon}</p>
            <p className={s.arrow}>→</p>
          </div>)
})}
          
          </div>
        </>
      ) : subchapter === "sights_weapon" ? (
        <Modal_Help_Sights_Weapon
          showHelp={showHelp}
          setShowHelp={setShowHelp}
          setSubchapter={setSubchapter}
          sight={sight}
        />
      ) : null}
    </>
  );
}
