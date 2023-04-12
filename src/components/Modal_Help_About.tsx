import s from "../styles/Modal_Help_About.module.css";

interface modalProps {
  showHelp: boolean;
  setShowHelp(): boolean;
  setChapter(): String;
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
          ←
        </button>
        <button className={s.close} onClick={() => setShowHelp(!showHelp)}>
          🗙
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
