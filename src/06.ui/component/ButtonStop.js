import { Stop } from '../../01.entities/stop-button/Stop.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { CircleButtonUI } from '../js/CircleButtonUI.js';

export function StopButton(){
    const id = 3; // Id use for config DataWriteList.js
    const elementId = 'buttonStop'; // Id of button 
    const entity = new Stop();
    const elementUI = new CircleButtonUI(elementId, 'btn_circle_out_STOP')

    const button = new PressAndHoldButton(id, elementId, entity, elementUI );
    return button;
}
