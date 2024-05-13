import { SelPhysicalPosition } from '../../01.entities/selection-physical-button/SelPhysicalPosition.js';
import { PressButtonToSetFalse } from '../../99.utils/ui/PressButtonToSetFalse.js'; 
import { TwoButtonPressedToggle } from '../../99.utils/ui/TwoButtonPressedToggle.js';

export function ButtonSelectionPhysicalPosition(){
    const id = 10; // Id use for config DataWriteList.js
    const elementId = 'buttonSelectionPhysicalPosition'; // Id of button 
    const entity = new SelPhysicalPosition();



    const button = new PressButtonToSetFalse(id, elementId, entity,TwoButtonPressedToggle,'buttonSelectionPhysicalPosition','buttonSelectionLogicalPosition');
    return button;
}
