import {createSpeedometer} from '../js/Speedmeter.js'

export function UpdateDisplayCurrentCarrierSpeed(value, unit, title, maxValue){
    document.getElementById("carrier-speedometer").innerHTML = createSpeedometer(value, unit, title, maxValue);
}