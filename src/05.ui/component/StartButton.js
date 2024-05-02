import { Start } from '../../01.entities/start-button/Start.js';
import { PressButtonToSetTrue } from '../../99.utils/ui/PressButtonToSetTrue.js'; 

export function StartButton(){
    const id = 2; // Id use for config DataWriteList.js
    const elementId = 'btnStart'; // Id of button 
    const entity = new Start();

    const button = new PressButtonToSetTrue(id, elementId, entity );
    return button;
}
