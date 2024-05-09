import { Reset } from '../../01.entities/reset-button/Reset.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { NormalButtonUI } from '../js/NormalButtonUI.js';

export function ResetButton(){
    const id = 4; // Id use for config DataWriteList.js
    const elementId = 'buttonReset'; // Id of button 
    const entity = new Reset();
    const elementUI = new NormalButtonUI(elementId)

    const button = new PressAndHoldButton(id, elementId, entity, elementUI );
    return button;
}
