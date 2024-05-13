import { SelLogicalPosition } from '../../01.entities/selection-logical-button/SelLogicalPosition.js';
import { PressButtonToSetTrue } from '../../99.utils/ui/PressButtonToSetTrue.js'; 
import { TwoButtonPressedToggle } from '../../99.utils/ui/TwoButtonPressedToggle.js';


export function ButtonSelectionLogicalPosition(){
    const id = 10; // Id use for config DataWriteList.js
    const elementId = 'buttonSelectionLogicalPosition'; // Id of button 
    const entity = new SelLogicalPosition();
   

    const button = new PressButtonToSetTrue(id, elementId, entity,TwoButtonPressedToggle,'buttonSelectionLogicalPosition','buttonSelectionPhysicalPosition');


    return button;
}
