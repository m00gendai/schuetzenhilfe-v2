import Hit from "./Hit";

import s from "../styles/Target.module.css";

import {useState, useRef} from "react"

interface Target {
  designation: string;
  name: string;
  distance: number;
  type: string;
}

interface Settings{
  sightMode: number;
  handMode: number;
  offset: number;
}

interface targetProps {
  target: Target;
  manualHitPosition: number[];
  setManualHitPosition: React.Dispatch<React.SetStateAction<number[]>>;
  calculatedHitPosition: number;
  setCalculatedHitPosition: React.Dispatch<React.SetStateAction<number>>;
  cursorPosition: number[];
  setCursorPosition: React.Dispatch<React.SetStateAction<number[]>>;
  zoom: number;
  reticle: number;
  settings: Settings;
}

export default function Target({
  target,
  manualHitPosition,
  setManualHitPosition,
  calculatedHitPosition,
  setCalculatedHitPosition,
  cursorPosition,
  setCursorPosition,
  zoom,
  reticle,
  settings,
}: targetProps) {

  const targetElement = useRef<HTMLElement>(null)
  const [mouseDown, setMouseDown] = useState<boolean>(false)
  const [mouseMove, setMouseMove] = useState<boolean>(false)

  function getManualHitPosition(event: any) {
    const offsetCompensate: number = zoom === 1 ? 1 : zoom === 2 ? 0.5 : 0.25
    const offset: number = mouseMove ? settings.offset : 0
    const width = event.currentTarget.getBoundingClientRect().width;
    const height = event.currentTarget.getBoundingClientRect().height;
    const sizeConstant = width / 100;
    let xCoordinate:number = ((event.nativeEvent.offsetX-offset) / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4);
    let yCoordinate:number = ((event.nativeEvent.offsetY-offset) / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4);
    if(event.type === "touchstart"){
      settings.handMode === 0 ?
      xCoordinate = (((event.changedTouches[0].clientX-event.currentTarget.getBoundingClientRect().left)-offset) / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4)
      :
      xCoordinate = (((event.changedTouches[0].clientX-event.currentTarget.getBoundingClientRect().left)+offset) / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4)
      yCoordinate = (((event.changedTouches[0].clientY-event.currentTarget.getBoundingClientRect().top)-offset) / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4);
      settings.handMode === 0 ?
      setCursorPosition([((event.changedTouches[0].clientX-event.currentTarget.getBoundingClientRect().left)-offset), ((event.changedTouches[0].clientY-event.currentTarget.getBoundingClientRect().top)-offset)])
      :
      setCursorPosition([((event.changedTouches[0].clientX-event.currentTarget.getBoundingClientRect().left)+offset), ((event.changedTouches[0].clientY-event.currentTarget.getBoundingClientRect().top)-offset)])
    }
    else if(event.type === "touchmove"){
      settings.handMode === 0 ?
      xCoordinate = (((event.changedTouches[0].clientX-event.currentTarget.getBoundingClientRect().left)-offset)*offsetCompensate / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4)
      :
      xCoordinate = (((event.changedTouches[0].clientX-event.currentTarget.getBoundingClientRect().left)+offset)*offsetCompensate / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4);
      yCoordinate = (((event.changedTouches[0].clientY-event.currentTarget.getBoundingClientRect().top)-offset)*offsetCompensate / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4);
      settings.handMode === 0 ?
      setCursorPosition([((event.changedTouches[0].clientX-event.currentTarget.getBoundingClientRect().left)-offset)*offsetCompensate, ((event.changedTouches[0].clientY-event.currentTarget.getBoundingClientRect().top)-offset)*offsetCompensate])
      :
      setCursorPosition([((event.changedTouches[0].clientX-event.currentTarget.getBoundingClientRect().left)+offset)*offsetCompensate, ((event.changedTouches[0].clientY-event.currentTarget.getBoundingClientRect().top)-offset)*offsetCompensate]);
    }
   else if(event.type=== "click"){
    settings.handMode === 0 ?
    xCoordinate = ((event.nativeEvent.offsetX-offset) / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4)
    :
    xCoordinate = ((event.nativeEvent.offsetX+offset) / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4)
    yCoordinate = ((event.nativeEvent.offsetY-offset) / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4);
    settings.handMode === 0 ?
    setCursorPosition([(event.nativeEvent.offsetX-offset), (event.nativeEvent.offsetY-offset)])
    :
    setCursorPosition([(event.nativeEvent.offsetX+offset), (event.nativeEvent.offsetY-offset)])
    }
    else if(event.type=== "mousemove"){
      settings.handMode === 0 ?
      xCoordinate = ((event.nativeEvent.offsetX-offset) / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4)
      :
      xCoordinate = ((event.nativeEvent.offsetX+offset) / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4)
      yCoordinate = ((event.nativeEvent.offsetY-offset) / sizeConstant) * 2*(zoom === 1 ? 1 : zoom === 2 ? 2 : 4);
      settings.handMode === 0 ?
      setCursorPosition([(event.nativeEvent.offsetX-offset), (event.nativeEvent.offsetY-offset)])
      :
      setCursorPosition([(event.nativeEvent.offsetX+offset), (event.nativeEvent.offsetY-offset)])
    }
    
    calculateHit([xCoordinate, yCoordinate]);
    return [xCoordinate, yCoordinate];
  }

  function calculateHit(hitPosition: number[]) {
    const x = hitPosition[0];
    const y = hitPosition[1];
    const distToCenter = Math.floor(
      Math.sqrt(Math.pow(x - 100, 2) + Math.pow(y - 100, 2))
    );
    const hit = 100 - distToCenter;
    setCalculatedHitPosition(hit);
  }

  function assignManualHitPosition(event: any) {
    const manualHitPosition: number[] = getManualHitPosition(event);
    setManualHitPosition(manualHitPosition);

  }

  function assignManualHitPositionDrag(event: any) {
    if(mouseDown){
    const manualHitPosition: number[] = getManualHitPosition(event);
    setManualHitPosition(manualHitPosition);
    }
  }

  if (zoom === 1 && targetElement.current != null) {
    targetElement.current.style.transform = 'scale(1,1) translate(-50%, -50%)';
  }
  if (zoom === 2 && targetElement.current != null) {
    targetElement.current.style.transform = 'scale(2,2) translate(-50%, -50%)';
  }
  if (zoom === 3 && targetElement.current != null) {
    targetElement.current.style.transform = 'scale(4,4) translate(-50%, -50%)';
  }

  function handleClick(event:any){
    setMouseMove(false)
    setMouseDown(false)
    assignManualHitPosition(event)
  }

  function handleMouseDown(){
    setMouseDown(true)
    setMouseMove(false)
  }

  function handleMouseMove(event:any){
    setMouseMove(true)
    assignManualHitPositionDrag(event)
  }

  return (
    <div className={s.wrapper}>
    <section
      className={s.container}
      style={{ backgroundImage: `url("/${target.designation}.jpg")` }}
      ref={targetElement}
    >
      {calculatedHitPosition ? (
        <Hit
          score={calculatedHitPosition}
          y={cursorPosition[1]}
          x={cursorPosition[0]}
          zoom={zoom}
          reticle={reticle}
        />
      ) : null}
      <div
        className={s.overlay}
        onClick={(event: any) => handleClick(event)}
        onTouchStart={()=>handleMouseDown()}
        onTouchMove={(event:any)=>handleMouseMove(event)}
        onMouseDown={()=>handleMouseDown()}
        onMouseMove={(event:any)=>handleMouseMove(event)}
      ></div>
    </section>
    </div>
  );
}
