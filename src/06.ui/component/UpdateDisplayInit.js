import {CarrierSpeed} from '../../01.entities/carrier-speed/CarrierSpeed.js'

export function UpdateDisplayInit(mappedData) {

  //  console.log('From UpdateDisplayInit: ' + mappedData.BabyNo);
    // const entity = new CarrierSpeed(4,mappedData.PLC_CarrierSpeed);

     const AGVnumber = document.getElementById('agv-n');
     AGVnumber.innerText = mappedData.BabyNo;

    // if (carrierSpeedElement) {
    //     carrierSpeedElement.innerText = entity.toString();
    // } else {
    //     console.error("Element with id 'act-speed' not found.");
    // }
}