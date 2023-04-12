import { useState } from "react";

import Modal_Help_Sights_Stgw90 from "./Modal_Help_Sights_Stgw90";

import s from "../styles/Modal_Help_Sights.module.css";

interface modalProps {
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  setChapter: React.Dispatch<React.SetStateAction<String>>;
}

export default function Modal_Help_Sights({
  showHelp,
  setShowHelp,
  setChapter,
}: modalProps) {
  const [subchapter, setSubchapter] = useState<String>("sights");

  return (
    <>
      {subchapter === "sights" ? (
        <>
          <div className={s.buttonRow}>
            <button className={s.back} onClick={() => setChapter("main")}>
              ←
            </button>
            <button className={s.close} onClick={() => setShowHelp(!showHelp)}>
              🗙
            </button>
          </div>
          <div className={s.content}>
            <div
              className={s.chapter}
              onClick={() => setSubchapter("sights_stgw90")}
            >
              <p className={s.chapterTitle}>Sturmgewehr 90</p>
              <p className={s.arrow}>→</p>
            </div>
          </div>
        </>
      ) : subchapter === "sights_stgw90" ? (
        <Modal_Help_Sights_Stgw90
          showHelp={showHelp}
          setShowHelp={setShowHelp}
          setSubchapter={setSubchapter}
        />
      ) : null}
    </>
  );
}
