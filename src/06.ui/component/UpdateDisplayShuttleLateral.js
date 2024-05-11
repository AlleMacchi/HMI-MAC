export function UpdateDisplayShuttleLateral(LiftUp){
    const shuttleDown = document.getElementById('BabyShuttleLateralDown');
    const shuttleUp = document.getElementById('BabyShuttleLateralUp');
    
    if (LiftUp) {
        shuttleUp.classList.add('show');
        shuttleUp.classList.remove('hidden');

        shuttleDown.classList.remove('show');
        shuttleDown.classList.add('hidden');
    } else {
        shuttleDown.classList.add('show');
        shuttleDown.classList.remove('hidden');

        shuttleUp.classList.remove('show');
        shuttleUp.classList.add('hidden');
    }

}