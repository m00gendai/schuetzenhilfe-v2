import{ GiCancel, GiSideswipe } from "react-icons/gi"

import modal from "../styles/Modal_Globals.module.css";

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
      <div className={modal.buttonRow}>
        <button className={modal.backButton} title="zurück" onClick={() => setChapter("main")}>
          <GiSideswipe/>
        </button>
        <button className={modal.closeButton} title="Hilfemenü schliessen" onClick={() => setShowHelp(!showHelp)}>
          <GiCancel />
        </button>
      </div>
      <div className={modal.content}>
        <h1 className={modal.title}>Modus Zeiger</h1>
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
