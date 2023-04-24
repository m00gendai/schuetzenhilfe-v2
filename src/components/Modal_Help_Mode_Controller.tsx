import { CancelButton, ArrowLeftButton } from "../buttons";

import s from "../styles/Modal_Help_Mode_Controller.module.css";

interface modalProps {
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  setChapter: React.Dispatch<React.SetStateAction<String>>;
}

export default function Modal_Help_Mode_Controller({
  showHelp,
  setShowHelp,
  setChapter,
}: modalProps) {
  return (
    <>
      <div className={s.buttonRow}>
        <button className={s.back} onClick={() => setChapter("main")}>
          <ArrowLeftButton />
        </button>
        <button className={s.close} onClick={() => setShowHelp(!showHelp)}>
          <CancelButton />
        </button>
      </div>
      <div className={s.content}>
        <h1 className={s.title}>Modus Zeiger</h1>
        <p>
          Dieser Modus soll dem Schützen helfen, die Visierung seiner Waffe auf
          die benötigte Distanz einzustellen.
        </p>
        <p>
          Es stehen eine Reihe von Voreinstellungen für Visiere und übliche
          Schweizer Scheibenbilder zur Verfügung; Die Distanz kann jeweils frei
          eingegeben werden und wird in Meter gerechnet.
        </p>
        <p>
          Mittels Antippen auf dem Scheibenbild wird ein Treffer gesetzt und in
          100er- und 10er-Wertung angezeigt.
        </p>
        <p>
          Ebenfalls werden, gerechnet auf die Distanz, die nötigen
          Verstellschritte der jeweiligen Visierung wiedergegeben.
        </p>
        <p>
          In einer Tabelle werden die Herstellerangaben der Verstellung
          (Trefferversatz und Referenzdistanz) sowie der auf die gewählte
          Distanz umgerechnete Trefferversatz angezeigt.
        </p>
        <p>
          Diese Werte sind selbstredend absolut theoretisch und berechnen
          Faktoren wie Temperatur, Luftfeuchtigkeit, Wind, Erdanziehung,
          Ballistik-Koeffizienten etc. nicht mit ein. Somit sind die errechneten
          Verstellschritte nur als Richtwert zu verstehen und garantieren nicht,
          dass im echten Leben der Folgetreffer auch im Zentrum zu liegen kommt.
        </p>
      </div>
    </>
  );
}
