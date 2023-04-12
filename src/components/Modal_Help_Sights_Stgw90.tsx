import CloseIcon from "@mui/icons-material/Close";
import WestIcon from "@mui/icons-material/West";

import s from "../styles/Modal_Help_Sights_Stgw90.module.css";

interface modalProps {
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  setSubchapter: React.Dispatch<React.SetStateAction<String>>;
}

export default function Modal_Help_Sights_Stgw90({
  showHelp,
  setShowHelp,
  setSubchapter,
}: modalProps) {
  return (
    <>
      <div className={s.buttonRow}>
        <button className={s.back} onClick={() => setSubchapter("sights")}>
          <WestIcon />
        </button>
        <button className={s.close} onClick={() => setShowHelp(!showHelp)}>
          <CloseIcon />
        </button>
      </div>
      <div className={s.content}>
        <h1 className={s.title}>Sturmgewehr 90</h1>
        <div className={s.item}>
          <div className={s.image}></div>
          <p>
            Wenn der Treffer <strong>links</strong> dem Zentrum liegt,
            Seitenkorrekturschraube im <strong>Uhrzeigersinn</strong> drehen.
          </p>
        </div>
        <div className={s.item}>
          <div className={s.image}></div>
          <p>
            Wenn der Treffer <strong>rechts</strong> dem Zentrum liegt,
            Seitenkorrekturschraube im <strong>Gegenuhrzeigersinn</strong>{" "}
            drehen.
          </p>
        </div>
        <div className={s.item}>
          <div className={s.image}></div>
          <p>
            Wenn der Treffer <strong>unter</strong> dem Zentrum liegt,
            Höhenverstellschraube im <strong>Uhrzeigersinn</strong> drehen.
          </p>
        </div>
        <div className={s.item}>
          <div className={s.image}></div>
          <p>
            Wenn der Treffer <strong>über</strong> dem Zentrum liegt,
            Höhenverstellschraube im <strong>Gegenuhrzeigersinn</strong> drehen.
          </p>
        </div>
      </div>
    </>
  );
}
