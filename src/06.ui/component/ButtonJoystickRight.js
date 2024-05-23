import { JoystickRight } from '../../01.entities/joystick-right/JoystickRight.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { CircleButtonUI } from '../js/CircleButtonUI.js';

export function ButtonJoystickRight(elementN){
    const id = 9; // Id use for config DataWriteList.js
    const idCmd = 6; // Id use for config DataWriteList.js
    const elementId = 'btn_RIGHT'; // Id of button 
    const entity = new JoystickRight();
    const elementUI = new CircleButtonUI(elementId, 'btn_circle_out_RIGHT')
    const elementClass = 'btn_RIGHT';

    const button = new PressAndHoldButtonByClass(id, elementId,elementN, entity, elementUI );
    const command = new PressAndHoldButtonByClass(idCmd, elementId,elementN, entity, elementUI );
    return {button, command};
}
