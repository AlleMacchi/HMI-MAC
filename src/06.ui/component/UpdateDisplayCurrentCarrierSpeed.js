import {createSpeedometer} from '../js/Speedmeter.js'

export function UpdateDisplayCurrentCarrierSpeed(value, unit, title){
    document.getElementById("carrier-speedometer").innerHTML = createSpeedometer(value, unit, title);
}