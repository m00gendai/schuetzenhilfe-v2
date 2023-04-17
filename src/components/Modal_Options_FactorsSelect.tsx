import s from "../styles/Modal_Options.module.css";

interface modalProps{
    distance: number;
  setDistance: React.Dispatch<React.SetStateAction<number>>;
}

export default function Modal_Options_FactorsSelect({distance, setDistance}:modalProps){

    function assignDistance(event: any) {
        setDistance(event.currentTarget.value);
        localStorage.setItem(
          "Schützenhilfe_Distanz",
          JSON.stringify(event.currentTarget.value)
        );
      }

    return(
        <div className={s.contentInputs}>
          <div className={s.item}>
            <h2 className={s.title}>Distanz in Meter</h2>
            <input
              type="number"
              value={distance}
              placeholder="300"
              id="setDistance"
              onChange={(event: any) => assignDistance(event)}
            />
          </div>
        </div>
    )
}