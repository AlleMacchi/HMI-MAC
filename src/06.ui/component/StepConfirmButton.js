import { StepConfirm } from '../../01.entities/step-confirm-button/StepConfirm.js';
import { NewStep} from '../../01.entities/new-step/NewStep.js'
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { InputFieldNoLabel } from '../../99.utils/ui/InputFieldNoLabel.js'; 
import { NormalButtonUI } from '../js/NormalButtonUI.js';

export function StepConfirmButton(){
    const id = 8; // Id use for config DataWriteList.js
    const elementId = 'buttonChangeStepConfirm'; // Id of button 
    const entity = new StepConfirm();
    const elementUI = new NormalButtonUI(elementId)

    const button = new PressAndHoldButton(id, elementId, entity, elementUI);

    const inputId = 13; // Id use for config DataWriteList.js
    const inputElementId = elementId; // Id of button 
    const inputField = 'selectedStep';
    const inputEntity = new NewStep();

    const input = new InputFieldNoLabel(inputId,inputField,inputElementId,inputEntity);
    
    return { button, input };
}
