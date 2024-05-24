import { Stop } from '../../01.entities/stop-button/Stop.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { CircleButtonUI } from '../js/CircleButtonUI.js';
import { CircleButtonUIByClass } from '../js/CircleButtonUIByClass.js';

export function StopButton(elementN){
    const id = 3; // Id use for config DataWriteList.js
    const elementId = 'buttonStop'; // Id of button 
    const entity = new Stop();
    const elementClass = 'buttonStop';
    const elementUI = new CircleButtonUIByClass(elementClass, 'btn_circle_out_STOP', elementN)

    const button = new PressAndHoldButtonByClass(id, elementClass,elementN, entity, elementUI );
    return button;
}
