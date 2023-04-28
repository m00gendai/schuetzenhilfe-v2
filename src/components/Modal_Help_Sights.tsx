import { useState } from "react";
import{ GiCancel, GiSideswipe, GiFnFal } from "react-icons/gi"
import Modal_Help_Sights_Weapon from "./Modal_Help_Sights_Weapon";
import { sightsHelp } from "../sightsHelp";

import modal from "../styles/Modal_Globals.module.css"

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
          <div className={modal.buttonRow}>
        <button className={modal.backButton} title="zurück" onClick={() => setChapter("main")}>
          <GiSideswipe />
        </button>
        <button className={modal.closeButton} title="Hilfemenü schliessen" onClick={() => setShowHelp(!showHelp)}>
          <GiCancel />
        </button>
      </div>
          <div className={modal.content}>
            <h1 className={modal.title}>Visierverstellungen</h1>
            {sightsHelp.map(sight =>{
            return (<div
            className={modal.chapter}
            onClick={() => handleSight(sight)}
          >
            <p className={modal.chapterTitle}>{sight.weapon}</p>
            <p className={modal.chapterIcon}><GiFnFal/></p>
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
