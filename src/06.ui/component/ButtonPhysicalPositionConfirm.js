import { SetPhysicalPosition } from '../../01.entities/set-physical-position/SetPhysicalPosition.js';
import { InputFieldWithLabel } from '../../99.utils/ui/InputFieldWithLabel.js';
import { NormalButtonUI } from '../js/NormalButtonUI.js';

export function ButtonPhysicalPositionConfirm(){
    const elementId = 'buttonConfirmPhysicalPosition'; // Id of button 
    const elementUI = new NormalButtonUI(elementId);

    const inputId = 17; // Id use for config DataWriteList.js
    const inputElementId = elementId; // Id of button 
    const inputField = 'setPositionPhysical';
    const inputEntity = new SetPhysicalPosition(inputId,0,'mm');
    const displayId = 'current-set-position'; 

    const input = new InputFieldWithLabel(inputId, inputField, inputElementId, displayId, inputEntity);

    // Attach event listeners for PressAndHoldButton
    const buttonElement = document.getElementById(elementId);
    buttonElement.addEventListener('mousedown', elementUI.showPressed());
    buttonElement.addEventListener('touchstart', elementUI.showPressed());
    buttonElement.addEventListener('mouseup', elementUI.showUnpressed());    
    buttonElement.addEventListener('touchend', elementUI.showUnpressed());
    buttonElement.addEventListener('mouseleave', elementUI.showUnpressed());
    
    return { input };
}

