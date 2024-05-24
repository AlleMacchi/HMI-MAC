import { SelPhysicalPosition } from '../../01.entities/selection-physical-button/SelPhysicalPosition.js';
import { PressButtonToSetFalse } from '../../99.utils/ui/PressButtonToSetFalse.js'; 
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { PressButtonToSetFalseByClass } from '../../99.utils/ui/PressButtonToSetFalseByClass.js';
import { TwoButtonPressedToggle, TwoButtonPressedToggleByClass } from '../../99.utils/ui/TwoButtonPressedToggle.js';

export function ButtonSelectionPhysicalPosition(elementN){
    const id = 10; // Id use for config DataWriteList.js
    const elementId = 'buttonSelectionPhysicalPosition'; // Id of button 
    const entity = new SelPhysicalPosition();
    const elementClass = 'buttonSelectionPhysicalPosition';



    const button = new PressButtonToSetFalseByClass(id, elementClass,elementN, entity,TwoButtonPressedToggleByClass,'buttonSelectionPhysicalPosition','buttonSelectionLogicalPosition');
    return button;
}
