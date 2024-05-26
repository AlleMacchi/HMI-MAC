import { SetPhysicalPosition } from '../../01.entities/set-physical-position/SetPhysicalPosition.js';
import { InputFieldNoLabelString } from '../../99.utils/ui/InputFieldNoLabelString.js';
import { NormalButtonUI } from '../js/NormalButtonUI.js';

export function ButtonSetPhysicalPositionConfirm(){
    const elementId = 'buttonSetPosition'; // Id of button 
    const elementUI = new NormalButtonUI(elementId);

    const id = 22; // Id use for config 17.js
    const inputId = 'positionInput';
    const inputEntity = new SetPhysicalPosition(inputId,0,'mm');
    const physicalPositionLabel = 'physicalPosition'; 

    // const input = new InputFieldWithLabelByClass(inputId, inputField, inputElementClass,elementN, displayClass, inputEntity);
    const input = new InputFieldNoLabelString(id, inputId, elementId, inputEntity,elementUI, physicalPositionLabel)

    // Attach event listeners for PressAndHoldButton
    // const buttonElement = document.getElementById(elementId);
    // buttonElement.addEventListener('mousedown', elementUI.showPressed());
    // buttonElement.addEventListener('touchstart', elementUI.showPressed());
    // buttonElement.addEventListener('mouseup', elementUI.showUnpressed());    
    // buttonElement.addEventListener('touchend', elementUI.showUnpressed());
    // buttonElement.addEventListener('mouseleave', elementUI.showUnpressed());
    
    return { input };
}

