import config from "../../00.config/config.js";

export function UpdateDisplayInit(data) {
  const SelMan = document.getElementById('btn_sel_man');
  const SelAuto = document.getElementById('btn_sel_auto');
  const BypassOn1 = document.getElementById('buttonSelectionBypassOn');
  const BypassOff1 = document.getElementById('buttonSelectionBypassOff');
  const BypassOn2 = document.getElementById('buttonSelectionBypassOn2');
  const BypassOff2 = document.getElementById('buttonSelectionBypassOff2');
  const AGVnumber = document.getElementById('agv-n');
  const SelLogical = document.getElementById('buttonSelectionLogicalPosition');
  const SelPhysical = document.getElementsByClassName('buttonSelectionPhysicalPosition');
  const SetPhysicalPosition = document.getElementsByClassName('current-set-position');
  const SetLogicalPosition2 = document.getElementById('section2-logical-position');
  const SetLogicalPosition3 = document.getElementById('section3-logical-position');
  const BatteryMinStartCharging = document.getElementById('Minimum-level-value');
  const BatteryMaxStopCharging = document.getElementById('Maximum-level-value');
  console.log(data);
  config.MotherPositionColumn = data.ColumnOfMotherShuttle;
  AGVnumber.innerText = data.BabyNo;

  if (data.StatusMode){
    SelMan.classList.remove('pressed');
    SelAuto.classList.add('pressed');
  }else{
    SelAuto.classList.remove('pressed');
    SelMan.classList.add('pressed');
  }

  if (data.Bypass){
    BypassOn1.classList.add('pressed');
    BypassOn2.classList.add('pressed');
    BypassOff1.classList.remove('pressed');
    BypassOff2.classList.remove('pressed');
  }else{
    BypassOn1.classList.remove('pressed');
    BypassOn2.classList.remove('pressed');
    BypassOff1.classList.add('pressed');
    BypassOff2.classList.add('pressed');
  }

  if (data.SelPhysicalLogical) {
    for (let i = 0; i < SelLogical.length; i++) {
      SelLogical[i].classList.add('pressed');
    }
    for (let i = 0; i < SelPhysical.length; i++) {
      SelPhysical[i].classList.remove('pressed');
    }
    
  } else {
    for (let i = 0; i < SelLogical.length; i++) {
      SelLogical[i].classList.remove('pressed');
    }

    for (let i = 0; i < SelPhysical.length; i++) {
      SelPhysical[i].classList.add('pressed');
    }
  }

  for (let i = 0; i < SetPhysicalPosition.length; i++) {
    SetPhysicalPosition[i].innerHTML = data.PositionToReach_mm + ' mm';
  }


    SetLogicalPosition2.innerHTML = data.PositionToReach_logical;
    SetLogicalPosition3.innerHTML = data.PositionToReach_logical;
    BatteryMinStartCharging.innerHTML = data.BatteryMinStartCharging + '%';
    BatteryMaxStopCharging.innerHTML = data.BatteryMaxStopCharging + '%';

  
}