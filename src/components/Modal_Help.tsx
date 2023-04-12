import { useState } from "react";

import Modal_Help_About from "./Modal_Help_About.tsx";
import Modal_Help_Mode_Controller from "./Modal_Help_Mode_Controller.tsx";

import s from "../styles/Modal_Help.module.css";

interface modalProps {
  showHelp: boolean;
  setShowHelp(): boolean;
}

export default function Modal_Help({ showHelp, setShowHelp }: modalProps) {
  const [chapter, setChapter] = useState<String>("main");

  return (
    <aside className={s.veil}>
      <div className={s.modal}>
        {chapter === "main" ? (
          <>
            <button className={s.close} onClick={() => setShowHelp(!showHelp)}>
              🗙
            </button>
            <div className={s.content}>
              <div
                className={s.chapter}
                onClick={() => setChapter("mode_controller")}
              >
                <p className={s.chapterTitle}>Modus Zeiger</p>
                <p className={s.arrow}>→</p>
              </div>
              <div className={s.chapter}>
                <p className={s.chapterTitle}>Visierverstellungen</p>
                <p className={s.arrow}>→</p>
              </div>
              <div className={s.chapter} onClick={() => setChapter("about")}>
                <p className={s.chapterTitle}>Über</p>
                <p className={s.arrow}>→</p>
              </div>
            </div>
          </>
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
