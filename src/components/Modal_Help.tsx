import { useState } from "react";

import Modal_Help_About from "./Modal_Help_About.tsx";

import s from "../styles/Modal_Help.module.css";

interface modalProps {
  showHelp: boolean;
  setShowHelp(): boolean;
}

export default function Modal_Help({ showHelp, setShowHelp }: modalProps) {
  const date = new Date();
  const currentYear = date.getFullYear();

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
              <div className={s.chapter}>
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
              <div className={s.copy}>
                {`© 2022-${currentYear} Marcel Weber / schussfreude.ch`}
              </div>
            </div>
          </>
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
