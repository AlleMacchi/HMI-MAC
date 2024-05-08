import { Start } from '../../01.entities/start-button/Start.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { CircleButtonUI } from '../js/CircleButtonUI.js';

export function StartButton(){
    const id = 2; // Id use for config DataWriteList.js
    const elementId = 'buttonStart'; // Id of button 
    const entity = new Start();
    const elementUI = new CircleButtonUI(elementId, 'btn_circle_out_START')

    const button = new PressAndHoldButton(id, elementId, entity, elementUI  );
    return button;
}
