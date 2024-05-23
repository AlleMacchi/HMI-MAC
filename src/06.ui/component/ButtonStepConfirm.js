import { StepConfirm } from '../../01.entities/step-confirm-button/StepConfirm.js';
import { NewStep} from '../../01.entities/new-step/NewStep.js'
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { InputFieldNoLabel } from '../../99.utils/ui/InputFieldNoLabel.js'; 
import { NormalButtonUI } from '../js/NormalButtonUI.js';

export function StepConfirmButton(){
    const id = 8; // Id use for config DataWriteList.js
    const elementId = 'buttonChangeStepConfirm'; // Id of button 
    const entity = new StepConfirm();
    const elementUI = new NormalButtonUI(elementId);

    const inputId = 13; // Id use for config DataWriteList.js
    const inputElementId = elementId; // Id of button 
    const inputField = 'selectedStep';
    const inputEntity = new NewStep();

    const input = new InputFieldNoLabel(inputId, inputField, inputElementId, inputEntity);

    // Instantiate PressAndHoldButton after InputFieldNoLabel
    const button = new PressAndHoldButton(id, elementId, entity, elementUI, validateNewStep);

    // Validation function for NewStep
    function validateNewStep() {
        const newStepInstance = new NewStep(inputId, parseFloat(inputEntity.value), inputEntity.unit);
        const validationErrors = newStepInstance.validate();
        if (validationErrors.length > 0) {
            console.error('Validation errors:', validationErrors);
            return false;
        }
        return true;
    }

    // Attach event listeners for PressAndHoldButton
    const buttonElement = document.getElementById(elementId);
    buttonElement.addEventListener('mousedown', button.handleMouseDown);
    buttonElement.addEventListener('touchstart', button.handleMouseDown);
    buttonElement.addEventListener('mouseup', button.handleMouseUp);    
    buttonElement.addEventListener('touchend', button.handleMouseUp);
    buttonElement.addEventListener('mouseleave', button.handleMouseLeave);
    
    return { button, input };
}

// export function StepConfirmButton(){
//     const id = 8; // Id use for config DataWriteList.js
//     const elementId = 'buttonChangeStepConfirm'; // Id of button 
//     const entity = new StepConfirm();
//     const elementUI = new NormalButtonUI(elementId)

//     const button = new PressAndHoldButton(id, elementId, entity, elementUI);

//     const inputId = 13; // Id use for config DataWriteList.js
//     const inputElementId = elementId; // Id of button 
//     const inputField = 'selectedStep';
//     const inputEntity = new NewStep();

//     const input = new InputFieldNoLabel(inputId,inputField,inputElementId,inputEntity);
    
//     return { button, input };
// }
