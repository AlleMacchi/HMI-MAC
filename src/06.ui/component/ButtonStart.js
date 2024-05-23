import { Start } from '../../01.entities/start-button/Start.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { CircleButtonUI } from '../js/CircleButtonUI.js';

export function StartButton(elementN){
    const id = 2; // Id use for config DataWriteList.js
    const elementId = 'buttonStart'; // Id of button 
    const entity = new Start();
    const elementUI = new CircleButtonUI(elementId, 'btn_circle_out_START')
    const elementClass = 'buttonStart';

    const button = new PressAndHoldButtonByClass(id, elementClass,elementN, entity, elementUI  );
    return button;
}
