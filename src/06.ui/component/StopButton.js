import { Stop } from '../../01.entities/stop-button/Stop.js';
import { PressButtonToSetFalse } from '../../99.utils/ui/PressButtonToSetFalse.js'; 

export function StopButton(){
    const id = 2; // Id use for config DataWriteList.js
    const elementId = 'btnStop'; // Id of button 
    const entity = new Stop();

    const button = new PressButtonToSetFalse(id, elementId, entity );
    return button;
}
