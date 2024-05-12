export function UpdateDisplayMovements(data){
    const LifterMoveUp = document.getElementById('movement-lift-up');
    const LifterMoveDown = document.getElementById('movement-lift-down');
    const CarrierMoveFwd = document.getElementById('movement-carrier-fwd');
    const CarrierMoveBwd = document.getElementById('movement-carrier-bwd');

    if (data.LifterIsMovingUp) {
        LifterMoveUp.classList.remove('triangle-up');
        LifterMoveUp.classList.add('triangle-up-green'); 
    } else {
        LifterMoveUp.classList.remove('triangle-up-green'); 
        LifterMoveUp.classList.add('triangle-up');  
    }

    if (data.LifterIsMovingDown) {
        LifterMoveDown.classList.remove('triangle-down');
        LifterMoveDown.classList.add('triangle-down-green'); 
    } else {
        LifterMoveDown.classList.remove('triangle-down-green'); 
        LifterMoveDown.classList.add('triangle-down');  
    }

    if (data.CarrierIsMoving && data.CarrierActSpeed > 0) {
        CarrierMoveFwd.classList.remove('triangle-left');
        CarrierMoveFwd.classList.add('triangle-left-green'); 
    } else {
        CarrierMoveFwd.classList.remove('triangle-left-green'); 
        CarrierMoveFwd.classList.add('triangle-left');  
    }

    if (data.CarrierIsMoving && data.CarrierActSpeed < 0) {
        CarrierMoveBwd.classList.remove('triangle-right');
        CarrierMoveBwd.classList.add('triangle-right-green'); 
    } else {
        CarrierMoveBwd.classList.remove('triangle-right-green'); 
        CarrierMoveBwd.classList.add('triangle-right');  
    }
}