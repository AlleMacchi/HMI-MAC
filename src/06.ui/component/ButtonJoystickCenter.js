import { JoystickCenter } from '../../01.entities/joystick-center/JoystickCenter.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { CircleButtonUI } from '../js/CircleButtonUI.js';

export function ButtonJoystickCenter(){
    const id = 9; // Id use for config DataWriteList.js
    const idCmd = 7; // Id use for config DataWriteList.js
    const elementId = 'btn_CENTER'; // Id of button 
    const entity = new JoystickCenter();
    const elementUI = new CircleButtonUI(elementId, 'btn_circle_out_CENTER')

    const button = new PressAndHoldButton(id, elementId, entity, elementUI );
    const command = new PressAndHoldButton(idCmd, elementId, entity, elementUI );
    return {button, command};
}
