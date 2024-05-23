import { JoystickDown } from '../../01.entities/joystick-down/JoystickDown.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { CircleButtonUI } from '../js/CircleButtonUI.js';

export function ButtonJoystickDown(elementN){
    const id = 11; // Id use for config DataWriteList.js
    const idCmd = 6; // Id use for config DataWriteList.js
    const elementId = 'btn_DOWN'; // Id of button 
    const entity = new JoystickDown();
    const elementUI = new CircleButtonUI(elementId, 'btn_circle_out_DOWN')
    const elementClass = 'btn_DOWN';

    const button = new PressAndHoldButtonByClass(id, elementClass,elementN, entity, elementUI );
    const command = new PressAndHoldButtonByClass(idCmd, elementClass,elementN, entity, elementUI );
    return {button, command};
}
