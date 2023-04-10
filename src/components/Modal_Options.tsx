import s from "../styles/Modal_Options.module.css";

interface modalProps {
  showOptions: boolean;
  setShowOptions(): boolean;
}

export default function Modal_Options({
  showOptions,
  setShowOptions,
}: modalProps) {
  return (
    <aside className={s.veil}>
      <div className={s.modal}>
        <button
          className={s.close}
          onClick={() => setShowOptions(!showOptions)}
        >
          X
        </button>
        lol
      </div>
    </aside>
  );
}
