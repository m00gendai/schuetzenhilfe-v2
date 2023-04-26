import { CancelButton, ArrowLeftButton } from "../buttons";

import s from "../styles/Modal_Help_Sights_Stgw90.module.css";

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
      <div className={s.buttonRow}>
        <button className={s.back} name="zurück" onClick={() => setSubchapter("sights")}>
          <ArrowLeftButton />
        </button>
        <button className={s.close} name="schliessen" onClick={() => setShowHelp(!showHelp)}>
          <CancelButton />
        </button>
      </div>
      <div className={s.content}>
        <h1 className={s.title}>{sight.weapon}</h1>
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
