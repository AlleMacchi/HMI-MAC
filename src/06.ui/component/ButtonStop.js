import { Stop } from '../../01.entities/stop-button/Stop.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { CircleButtonUI } from '../js/CircleButtonUI.js';

export function StopButton(elementN){
    const id = 3; // Id use for config DataWriteList.js
    const elementId = 'buttonStop'; // Id of button 
    const entity = new Stop();
    const elementUI = new CircleButtonUI(elementId, 'btn_circle_out_STOP')
    const elementClass = 'buttonStop';

    const button = new PressAndHoldButtonByClass(id, elementClass,elementN, entity, elementUI );
    return button;
}
