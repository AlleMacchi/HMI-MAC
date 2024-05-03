import { Reset } from '../../01.entities/reset-button/Reset.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 

export function ResetButton(){
    const id = 1; // Id use for config DataWriteList.js
    const elementId = 'btnReset'; // Id of button 
    const entity = new Reset();

    const button = new PressAndHoldButton(id, elementId, entity );
    return button;
}
