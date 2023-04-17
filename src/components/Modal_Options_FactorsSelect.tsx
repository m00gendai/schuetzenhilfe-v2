import s from "../styles/Modal_Options.module.css";

interface modalProps{
    distance: number;
  setDistance: React.Dispatch<React.SetStateAction<number>>;
  windage: number;
  setWindage: React.Dispatch<React.SetStateAction<number>>;
  elevation: number;
  setElevation: React.Dispatch<React.SetStateAction<number>>;
  base: number;
  setBase: React.Dispatch<React.SetStateAction<number>>;
}

export default function Modal_Options_FactorsSelect({distance, setDistance, windage, setWindage, elevation, setElevation, base, setBase}:modalProps){

    function assignDistance(event: any) {
        setDistance(event.currentTarget.value);
        localStorage.setItem(
          "Schützenhilfe_Distanz",
          JSON.stringify(event.currentTarget.value)
        );
      }

      function assignCustomBase(event: any) {
        setBase(event.currentTarget.value);
        localStorage.setItem(
          "Schützenhilfe_Referenz",
          JSON.stringify(event.currentTarget.value)
        );
      }

      function assignCustomWindage(event: any) {
        setWindage(event.currentTarget.value);
        localStorage.setItem(
          "Schützenhilfe_Seite",
          JSON.stringify(event.currentTarget.value)
        );
      }

      function assignCustomElevation(event: any) {
        setElevation(event.currentTarget.value);
        localStorage.setItem(
          "Schützenhilfe_Höhe",
          JSON.stringify(event.currentTarget.value)
        );
      }

    return(
        <div className={s.contentInputs}>
          <div className={s.item}>
            <h2 className={s.title}>Zieldistanz in Meter</h2>
            <input
              type="number"
              value={distance}
              placeholder="300"
              id="setDistance"
              onChange={(event: any) => assignDistance(event)}
            />
          </div>
          <div className={s.item}>
            <h2 className={s.title}>Referenzdistanz in Meter</h2>
            <input
              type="number"
              value={base}
              placeholder="25"
              id="setsetBase"
              onChange={(event: any) => assignCustomBase(event)}
            />
          </div>
          <div className={s.item}>
            <h2 className={s.title}>Individueller Verstellschritt Seite in Zentimeter</h2>
            <input
              type="number"
              value={windage}
              placeholder="1"
              id="setWindage"
              onChange={(event: any) => assignCustomWindage(event)}
            />
          </div>
          <div className={s.item}>
            <h2 className={s.title}>Individueller Verstellschritt Höhe in Zentimeter</h2>
            <input
              type="number"
              value={elevation}
              placeholder="1"
              id="setElevation"
              onChange={(event: any) => assignCustomElevation(event)}
            />
          </div>
        </div>
    )
}