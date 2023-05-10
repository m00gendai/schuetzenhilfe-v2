import { GiCancel, GiSideswipe } from "react-icons/gi"
import s from "../styles/Modal_Help_About.module.css";
import modal from "../styles/Modal_Globals.module.css"

interface modalProps {
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  setChapter: React.Dispatch<React.SetStateAction<String>>;
}

export default function Modal_Help_About({
  showHelp,
  setShowHelp,
  setChapter,
}: modalProps) {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <div className={modal.buttonRow}>
        <button className={modal.backButton} title="zurück" onClick={() => setChapter("main")}>
          <GiSideswipe />
        </button>
        <button className={modal.closeButton} title="Hilfemenü schliessen" onClick={() => setShowHelp(!showHelp)} >
          <GiCancel />
        </button>
      </div>
      <div className={modal.content}>
        <h1 className={modal.title}>Über</h1>
        <div className={s.links}>
          <a href="https://paypal.me/schussfreude?country.x=CH&locale.x=de_DE" target="_blank">PayPal</a>
          <a href="https://www.patreon.com/schussfreude" target="_blank">Patreon</a>
          <a href="https://github.com/m00gendai/schuetzenhilfe-v2" target="_blank">GitHub</a>
          <a href="https://trello.com/b/7QbKeNiE/schusshilfe" target="_blank">Trello</a>
          <a href="https://ch.linkedin.com/in/marcel-weber-3a05a61bb" target="_blank">LinkedIn</a>
          <a href="https://www.schussfreude.ch" target="_blank">schussfreude.ch</a>
          <a href="https://www.waffenforum.ch" target="_blank">waffenforum.ch</a>
        </div>
        <div className={s.copy}>
          <span>{`© 2022-${currentYear} Marcel Weber / schussfreude.ch`}</span>
          <a href="mailto:info@mrweber.ch">info@mrweber.ch</a>
        </div>
        <p className={s.copy}>Icons: <a style={{margin: "0 0.5ch"}} href="https://game-icons.net/" target="_blank">game-icons</a> via <a style={{margin: "0 0.5ch"}} href="https://react-icons.github.io/react-icons/" target="_blank">react-icons</a></p>
        <p className={s.copy}>Version Alpha 7.0.0</p>
      </div>
    </>
  );
}
