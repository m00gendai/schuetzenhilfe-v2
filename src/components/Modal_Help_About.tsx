import CloseIcon from "@mui/icons-material/Close";
import WestIcon from "@mui/icons-material/West";

import s from "../styles/Modal_Help_About.module.css";

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
      <div className={s.buttonRow}>
        <button className={s.back} onClick={() => setChapter("main")}>
          <WestIcon />
        </button>
        <button className={s.close} onClick={() => setShowHelp(!showHelp)}>
          <CloseIcon />
        </button>
      </div>
      <div className={s.content}>
        <h1 className={s.title}>Über</h1>
        <div className={s.links}>
          <a href="https://paypal.me/schussfreude?country.x=CH&locale.x=de_DE" target="_blank">PayPal</a>
          <a href="https://www.patreon.com/schussfreude" target="_blank">Patreon</a>
          <a href="https://github.com/m00gendai/schuetzenhilfe-v2" target="_blank">GitHub</a>
          <a href="https://ch.linkedin.com/in/marcel-weber-3a05a61bb" target="_blank">LinkedIn</a>
          <a href="https://www.schussfreude.ch" target="_blank">schussfreude.ch</a>
          <a href="https://www.waffenforum.ch" target="_blank">waffenforum.ch</a>
        </div>
        <p className={s.copy}>
          <span>{`© 2022-${currentYear} Marcel Weber / schussfreude.ch`}</span>
          <a href="mailto:info@mrweber.ch">info@mrweber.ch</a>
        </p>
      </div>
    </>
  );
}
