export function UpdateSensorLifterUp(LifterInPositionUp){

const element = document.getElementById("sensor-lift-up");

if (LifterInPositionUp) {
    element.classList.add('green');
}else{
    element.classList.remove('green');
}


}