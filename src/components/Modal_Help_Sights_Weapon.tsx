import{ GiCancel, GiSideswipe } from "react-icons/gi"

import s from "../styles/Modal_Help_Sights_Weapon.module.css"
import modal from "../styles/Modal_Globals.module.css";

interface modalProps {
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  setSubchapter: React.Dispatch<React.SetStateAction<String>>;
  sight: Sight;
}

interface Sight {
  weapon: string;
  shotLeft: string;
  shotRight: string;
  shotBelow: string;
  shotAbove: string;
}

export default function Modal_Help_Sights_Weapon({
  showHelp,
  setShowHelp,
  setSubchapter,
  sight
}: modalProps) {
  return (
    <>
      <div className={modal.buttonRow}>
        <button className={modal.backButton} title="zurück" onClick={() => setSubchapter("sights")}>
          <GiSideswipe />
        </button>
        <button className={modal.closeButton} title="Hilfemenü schliessen" onClick={() => setShowHelp(!showHelp)}>
          <GiCancel />
        </button>
      </div>
      <div className={modal.content}>
        <h1 className={modal.title}>{sight.weapon}</h1>
        <div className={s.item}>
          <div className={s.image}></div>
          <p>
            Wenn der Treffer <strong>links</strong> dem Zentrum liegt,
            Seitenkorrekturschraube im <strong>{sight.shotLeft}</strong> drehen.
          </p>
        </div>
        <div className={s.item}>
          <div className={s.image}></div>
          <p>
            Wenn der Treffer <strong>rechts</strong> dem Zentrum liegt,
            Seitenkorrekturschraube im <strong>{sight.shotRight}</strong>
            drehen.
          </p>
        </div>
        <div className={s.item}>
          <div className={s.image}></div>
          <p>
            Wenn der Treffer <strong>unter</strong> dem Zentrum liegt,
            Höhenverstellschraube im <strong>{sight.shotBelow}</strong> drehen.
          </p>
        </div>
        <div className={s.item}>
          <div className={s.image}></div>
          <p>
            Wenn der Treffer <strong>über</strong> dem Zentrum liegt,
            Höhenverstellschraube im <strong>{sight.shotAbove}</strong> drehen.
          </p>
        </div>
      </div>
    </>
  );
}
