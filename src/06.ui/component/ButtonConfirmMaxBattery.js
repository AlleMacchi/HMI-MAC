import { Battery } from '../../01.entities/battery/Battery.js';
import { SetPhysicalPosition } from '../../01.entities/set-physical-position/SetPhysicalPosition.js';
import { InputFieldWithLabel } from '../../99.utils/ui/InputFieldWithLabel.js';
import { InputFieldWithLabelByClass } from '../../99.utils/ui/InputFieldWithLabelByClass.js';
import { NormalButtonUI } from '../js/NormalButtonUI.js';
import config from '../../00.config/config.js';

export function ButtonConfirmMaxBattery(){
    const elementId = 'btn-maximum-level'; // Id of button 
    const elementUI = new NormalButtonUI(elementId);
    // const elementClass = 'buttonConfirmPhysicalPosition';

    const inputId = 15; // Id use for config 17.js
    const inputElementId = elementId; // Id of button 
    const inputField = 'Maximum-level-input';
    const inputEntity = new Battery();
    const displayId = 'Maximum-level-value';
    
    // const inputElementClass = elementClass;
    // const displayClass = 'current-set-position';


    const input = new InputFieldWithLabel(inputId, inputField, elementId, displayId, inputEntity);

    // Attach event listeners for PressAndHoldButton
    const buttonElement = document.getElementById(elementId);
    buttonElement.addEventListener('mousedown', elementUI.showPressed());
    buttonElement.addEventListener('touchstart', elementUI.showPressed());
    buttonElement.addEventListener('mouseup', elementUI.showUnpressed());    
    buttonElement.addEventListener('touchend', elementUI.showUnpressed());
    buttonElement.addEventListener('mouseleave', elementUI.showUnpressed());
    
    return { input };
}

