import { JoystickRight } from '../../01.entities/joystick-right/JoystickRight.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { CircleButtonUI } from '../js/CircleButtonUI.js';

export function ButtonJoystickRight(){
    const id = 9; // Id use for config DataWriteList.js
    const idCmd = 6; // Id use for config DataWriteList.js
    const elementId = 'btn_RIGHT'; // Id of button 
    const entity = new JoystickRight();
    const elementUI = new CircleButtonUI(elementId, 'btn_circle_out_RIGHT')

    const button = new PressAndHoldButton(id, elementId, entity, elementUI );
    const command = new PressAndHoldButton(idCmd, elementId, entity, elementUI );
    return {button, command};
}
