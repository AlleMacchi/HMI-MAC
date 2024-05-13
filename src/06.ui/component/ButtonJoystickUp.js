import { JoystickUp } from '../../01.entities/joystick-up/JoystickUp.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { CircleButtonUI } from '../js/CircleButtonUI.js';

export function ButtonJoystickUp(){
    const id = 11; // Id use for config DataWriteList.js
    const idCmd = 5; // Id use for config DataWriteList.js
    const elementId = 'btn_UP'; // Id of button 
    const entity = new JoystickUp();
    const elementUI = new CircleButtonUI(elementId, 'btn_circle_out_UP')

    const button = new PressAndHoldButton(id, elementId, entity, elementUI );
    const command = new PressAndHoldButton(idCmd, elementId, entity, elementUI );
    return {button, command};
}
