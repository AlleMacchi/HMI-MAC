import { SelLogicalPosition } from '../../01.entities/selection-logical-button/SelLogicalPosition.js';
import { PressButtonToSetTrue } from '../../99.utils/ui/PressButtonToSetTrue.js'; 
import { TwoButtonPressedToggle, TwoButtonPressedToggleByClass, TwoButtonPressedToggleByClassWithDisable } from '../../99.utils/ui/TwoButtonPressedToggle.js';
import { PressButtonToSetTrueByClass } from '../../99.utils/ui/PressButtonToSetTrueByClass.js';


export function ButtonSelectionLogicalPosition(elementN){
    const id = 10; // Id use for config DataWriteList.js
    const elementId = 'buttonSelectionLogicalPosition'; // Id of button 
    const entity = new SelLogicalPosition();
    const elementClass = 'buttonSelectionLogicalPosition';
   

    const button = new PressButtonToSetTrueByClass(id, elementClass,elementN, entity,TwoButtonPressedToggleByClassWithDisable,'buttonSelectionLogicalPosition','buttonSelectionPhysicalPosition');


    return button;
}
