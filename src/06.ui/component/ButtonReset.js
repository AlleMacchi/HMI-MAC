import { Reset } from '../../01.entities/reset-button/Reset.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js';
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { NormalButtonUI } from '../js/NormalButtonUI.js';
import { NormalButtonUIByClass } from '../js/NormalButtonUIByClass.js';

export function ResetButton(elementN){
    const id = 4; // Id use for config DataWriteList.js
    const elementId = 'buttonReset'; // Id of button 
    const entity = new Reset();
    const elementClass = 'buttonReset';
    const elementUI = new NormalButtonUIByClass(elementClass,elementN)

    const button = new PressAndHoldButtonByClass(id, elementClass,elementN, entity, elementUI );
    return button;
}
