import { GiSideswipe, GiCancel, GiCog, GiMagnifyingGlass, GiMultipleTargets, GiRuleBook, GiArcheryTarget, GiFnFal, GiLuger, GiPencilRuler } from "react-icons/gi";
import modal from "../styles/Modal_Globals.module.css"
import s from "../styles/Modal_Help_Tutorial.module.css"

interface modalProps {
    showHelp: boolean;
    setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
    setChapter: React.Dispatch<React.SetStateAction<String>>;
  }

export default function Modal_Tutorial({
    showHelp,
    setShowHelp,
    setChapter,
  }: modalProps) {
    return(
<>
        <div className={modal.buttonRow}>
        <button className={modal.backButton} title="zurück" onClick={() => setChapter("main")}>
          <GiSideswipe />
        </button>
        <button className={modal.closeButton} title="Hilfemenü schliessen" onClick={() => setShowHelp(!showHelp)}>
          <GiCancel />
        </button>
      </div>
            <div className={modal.content}>
                <h1 className={modal.title}>Anleitung</h1>
                <p>
                    Diese App ist eine Hilfe zum Einstellen der Visierung.
                    Es kann Waffe/Visier, Zielscheibe und Distanz gewählt werden.
                    Auf der Zielscheibe kann per Antippen oder wischen ein Treffer gesetzt werden.
                    Die App zeigt dann an, wie viel und in welche Richtung die Visierung korrigiert werden muss.
                    Ebenfalls werden die Verstellschritte für die Referenzdistanz und die individuell eingestellte Distanz umgerechnet dargestellt.
                </p>
                <h2>Hauptansicht</h2>
                <p>
                    Die Hauptansicht gliedert sich in drei Sektionen: Zielscheibe, Menüzeile und Korrekturanzeige.
                </p>
                <div className={s.frame}>
                <h3>Zielscheibe</h3>
                <p>
                    Die Zielscheibe zeigt die gewählte Zielscheibe dar. Mit Antippen/Wischen wird darauf ein Treffer angezeigt.
                </p>
                </div>
                <div className={s.frame}>
                <h3>Menüzeile</h3>
                <p>
                    Die Menüzeile enthält vier Funktionsknöpfe und zeigt in der Mitte die Trefferpunktzahl in 100er-Wertung an.
                </p>
                <h4 className={s.titleButton}>
                    <GiCog />
                </h4>
                <p>
                    Der Optionsknopf führt zur Auswahl von Zielscheibe, Waffe/VIsierung und eigenen Distanz-/Visiereinstellungen.
                </p>
                <h4 className={s.titleButton}>
                    <GiMagnifyingGlass />
                </h4>
                <p>
                    Der Zoom-Knopf vergrössert die Zielscheibe in drei Stufen, analog zu den SIUS-Monitoren.
                </p>
                <h4 className={s.titleButton}>
                    <GiMultipleTargets/>
                </h4>
                <p>
                    Der Treffer-Knopf wechselt zwischen zwei Trefferanzeigen - Kreis mit Trefferpunkte in 10er-Wertung oder Fadenkreuz.
                </p>
                <h4 className={s.titleButton}>
                    <GiRuleBook />
                </h4>
                <p>
                    Der Hilfe-Knopf führt zum Hilfemenü.
                </p>
                </div>
                <div className={s.frame}>
                <h3>Korrekturanzeige</h3>
                <p>
                    Die Korrekturanzeige zeigt einerseits an, welche Waffe/Visierung, Distanz und Zielscheibe ausgewählt sind.
                </p>
                <p>
                    Hauptelement ist die Anzeige, um wie viele Schritte die Visierung verstellt werden muss, um möglichst nahe
                    ins Zentrum zu kommen. 
                </p>
                <p>
                    Darunter wird dargestellt, wie gross die Verstellschritte gerechnet auf die vom Hersteller kalibrierte, sowie 
                    die vom Nutzer eingestellte Distanz sind.
                </p>
                </div>
                <div className={s.frame}>
                <h3>Optionsmenü</h3>
                <p>
                    Im Optionsmenü kann die Zielscheibe und die Waffe/das Visier festgelegt werden.
                    Ebenfalls kann die gewünschte Distanz zum Ziel und/oder eigene Verstellschritte einer Visierung eingegeben werden.
                </p>
                <h4 className={s.titleButton}>
                    <GiArcheryTarget />
                </h4>
                <p>
                    In der Zielscheibenauswahl stehen nach üblichen Distanzen/Disziplinen geordnete Zielscheiben zur AUswahl.
                    Mit Klick auf die Scheibe wird diese dargestellt. Die Zielscheiben sind so positioniert, dass das Scheibenzentrum in der Mitte ist - 
                    und nicht die Mitte der Scheibe selbst! Beispielsweise ist bei der 50m Morgartenscheibe das Zentrum leicht unterhalb der Mitte der Scheibe.
                </p>
                <h4 className={s.titleButtonWide}>
                    <GiFnFal /><GiLuger />
                </h4>
                <p>
                    In der Waffen-/Visierauswahl können eine vielzahl voreingestellter Waffen/Visierungen ausgewählt werden.
                    Wird "Individuelle Verstellschritte" ausgewählt, müssen im Eigenschaftenmenü die Referenzdistanz sowie die Verstellschritte festgelegt werden.
                </p>
                <h4 className={s.titleButton}>
                    <GiPencilRuler />
                </h4>
                <p>
                    Im Eigenschaftsmenü können die Distanz zum Ziel sowie die Referenzdistanz und Visierverstellschritte eines individuellen Visieres eingegeben werden.
                </p>
                <p>
                    Um eigene Verstellschritte einzugeben muss zuerst die "Individuelle Verstellschritte" bei den Waffen/Visieren ausgewählt werden.
                    Die Referenzdistanz ist hierbei die vom Hersteller angegebene Distanz, auf die die Waffe/Visierung kalibriert ist.
                </p>
                </div>
                
            </div>

        </>
    )
}