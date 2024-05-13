export function UpdateDisplayInit(data) {
  const AGVnumber = document.getElementById('agv-n');
  const SelLogical = document.getElementById('buttonSelectionLogicalPosition');
  const SelPhysical = document.getElementById('buttonSelectionPhysicalPosition');
  const SetPhysicalPosition = document.getElementById('current-set-position');
  const SetLogicalPosition = document.getElementById('section2-logical-position');
  
  AGVnumber.innerText = data.BabyNo;

  if (data.SelPhysicalLogical) {
    SelLogical.classList.add('pressed');
    SelPhysical.classList.remove('pressed');
  } else {
    SelLogical.classList.remove('pressed');
    SelPhysical.classList.add('pressed');
  }

  SetPhysicalPosition.innerHTML = data.PositionToReach_mm + ' mm';
  SetLogicalPosition.innerHTML = data.PositionToReach_logical; 

}