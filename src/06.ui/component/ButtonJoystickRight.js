import { JoystickRight } from '../../01.entities/joystick-right/JoystickRight.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { CircleButtonUI } from '../js/CircleButtonUI.js';
import { CircleButtonUIByClass } from '../js/CircleButtonUIByClass.js';

export function ButtonJoystickRight(elementN){
    const id = 9; // Id use for config DataWriteList.js
    const idCmd = 6; // Id use for config DataWriteList.js
    const elementId = 'btn_RIGHT'; // Id of button 
    const entity = new JoystickRight();
    const elementClass = 'btn_RIGHT';
    const elementUI = new CircleButtonUIByClass(elementClass, 'btn_circle_out_RIGHT', elementN);

    const button = new PressAndHoldButtonByClass(id, elementClass,elementN, entity, elementUI );
    const command = new PressAndHoldButtonByClass(idCmd, elementClass,elementN, entity, elementUI );
    return {button, command};
}
