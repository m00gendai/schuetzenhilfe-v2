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
        <p className={s.copy}>
          {`© 2022-${currentYear} Marcel Weber / schussfreude.ch`}
        </p>
      </div>
    </>
  );
}
