import targets from "./assets/archery-target.svg"
import ruler from "./assets/pencil-ruler.svg"
import s from "./styles/buttons.module.css";
import fal from "./assets/fn-fal.svg"
import luger from "./assets/luger.svg"
import cancel from "./assets/cancel.svg"
import settings from "./assets/settings-knobs.svg"
import rules from "./assets/rule-book.svg"
import arrowLeft from "./assets/sideswipe.svg"
import crosshair from "./assets/crosshair.svg"
import uncertain from "./assets/uncertainty.svg"
import sherlock from "./assets/sherlock-holmes.svg"

export const TargetButton = () => <img src={targets} className={s.icon} />

export const RulerButton = () =>  <img src={ruler} className={s.icon} />

export const FalButton = () => <img src={fal} className={s.icon} />

export const LugerButton = () => <img src={luger} className={s.icon} />

export const CancelButton = () => <img src={cancel} className={s.icon} />

export const SettingsButton = () => <img src={settings} className={s.icon} />

export const RulesButton = () => <img src={rules} className={s.icon} />

export const ArrowLeftButton = () => <img src={arrowLeft} className={s.icon} />

export const CrosshairButton = () => <img src={crosshair} className={`${s.icon} ${s.invertColor}`} />

export const UncertainButton = () => <img src={uncertain} className={`${s.icon} ${s.invertColor}`} />

export const SherlockButton = () => <img src={sherlock} className={`${s.icon} ${s.invertColor}`} />

