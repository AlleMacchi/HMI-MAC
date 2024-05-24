import { Start } from '../../01.entities/start-button/Start.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { CircleButtonUI } from '../js/CircleButtonUI.js';
import { CircleButtonUIByClass } from '../js/CircleButtonUIByClass.js';

export function StartButton(elementN){
    const id = 2; // Id use for config DataWriteList.js
    const elementId = 'buttonStart'; // Id of button 
    const entity = new Start();
    const elementClass = 'buttonStart';
    const elementUI = new CircleButtonUIByClass(elementClass, 'btn_circle_out_START', elementN)

    const button = new PressAndHoldButtonByClass(id, elementClass,elementN, entity, elementUI  );
    return button;
}
