import s from "../styles/Modal_Help_Sights_Stgw90.module.css";

interface modalProps {
  showHelp: boolean;
  setShowHelp(): boolean;
  setChapter(): String;
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
          ←
        </button>
        <button className={s.close} onClick={() => setShowHelp(!showHelp)}>
          🗙
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
            Seitenkorrekturschraube im <strong>Uhrzeigersinn</strong> drehen. im{" "}
            <strong>Gegeuhrzeigersinn</strong> drehen.
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
