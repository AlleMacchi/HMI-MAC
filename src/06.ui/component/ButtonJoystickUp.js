import { JoystickUp } from '../../01.entities/joystick-up/JoystickUp.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { CircleButtonUI } from '../js/CircleButtonUI.js';
import { CircleButtonUIByClass } from '../js/CircleButtonUIByClass.js';

export function ButtonJoystickUp(elementN){
    const id = 11; // Id use for config DataWriteList.js
    const idCmd = 5; // Id use for config DataWriteList.js
    const elementId = 'btn_UP'; // Id of button 
    const entity = new JoystickUp();
    const elementClass = 'btn_UP';
    const elementUI = new CircleButtonUIByClass(elementClass, 'btn_circle_out_UP',elementN);

    const button = new PressAndHoldButtonByClass(id, elementClass,elementN, entity, elementUI );
    const command = new PressAndHoldButtonByClass(idCmd, elementClass,elementN, entity, elementUI );
    return {button, command};
}
