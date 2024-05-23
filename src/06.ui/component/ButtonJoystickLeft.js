import { JoystickLeft} from '../../01.entities/joystick-left/JoystickLeft.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { CircleButtonUI } from '../js/CircleButtonUI.js';

export function ButtonJoystickLeft(elementN){
    const id = 9; // Id use for config DataWriteList.js
    const idCmd = 5; // Id use for config DataWriteList.js
    const elementId = 'btn_LEFT'; // Id of button 
    const entity = new JoystickLeft();
    const elementUI = new CircleButtonUI(elementId, 'btn_circle_out_LEFT')
    const elementClass = 'btn_LEFT';

    const button = new PressAndHoldButtonByClass(id, elementClass,elementN, entity, elementUI );
    const command = new PressAndHoldButtonByClass(idCmd, elementClass,elementN, entity, elementUI );
    return {button, command};
}
