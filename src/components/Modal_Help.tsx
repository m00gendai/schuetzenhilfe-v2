import { useState } from "react";

import Modal_Help_Sights from "./Modal_Help_Sights";
import Modal_Help_Mode_Controller from "./Modal_Help_Mode_Controller";
import Modal_Help_About from "./Modal_Help_About";
import {GiCrosshair, GiUncertainty, GiSherlockHolmes, GiCancel} from "react-icons/gi"

import modal from "../styles/Modal_Globals.module.css"

interface modalProps {
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal_Help({ showHelp, setShowHelp }: modalProps) {
  const [chapter, setChapter] = useState<String>("main");

  return (
    <aside className={modal.veil}>
      <div className={modal.modal}>
        {chapter === "main" ? (
          <><div className={modal.buttonRow}>
          <button className={modal.closeButton} title="Hilfemenü schliessen" onClick={() => setTimeout(function(){setShowHelp(!showHelp)},200)}>
            <GiCancel />
          </button>
        </div>
            <div className={modal.content}>
              <h1 className={modal.title}>Hilfemenü</h1>
              <div
                className={modal.chapter}
                onClick={() => setChapter("mode_controller")}
              >
                <p className={modal.chapterTitle}>Modus Zeiger</p>
                <p className={modal.chapterIcon}><GiCrosshair /></p>
              </div>
              <div className={modal.chapter} onClick={() => setChapter("sights")}>
                <p className={modal.chapterTitle}>Visierverstellungen</p>
                <p className={modal.chapterIcon}><GiUncertainty /></p>
              </div>
              <div className={modal.chapter} onClick={() => setChapter("about")}>
                <p className={modal.chapterTitle}>Über</p>
                <p className={modal.chapterIcon}><GiSherlockHolmes /></p>
              </div>
            </div>
          </>
        ) : chapter === "sights" ? (
          <Modal_Help_Sights
            showHelp={showHelp}
            setShowHelp={setShowHelp}
            setChapter={setChapter}
          />
        ) : chapter === "mode_controller" ? (
          <Modal_Help_Mode_Controller
            showHelp={showHelp}
            setShowHelp={setShowHelp}
            setChapter={setChapter}
          />
        ) : chapter === "about" ? (
          <Modal_Help_About
            showHelp={showHelp}
            setShowHelp={setShowHelp}
            setChapter={setChapter}
          />
        ) : null}
      </div>
    </aside>
  );
}
