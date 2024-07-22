import { SelBypassOff } from '../../01.entities/selection-bypassOff-button/SelBypassOff.js';
import { PressButtonToSetFalse } from '../../99.utils/ui/PressButtonToSetFalse.js'; 
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { PressButtonToSetFalseByClass } from '../../99.utils/ui/PressButtonToSetFalseByClass.js';
import { TwoButtonPressedToggle, TwoButtonPressedToggleByClass, TwoButtonPressedToggleByClassWithDisable } from '../../99.utils/ui/TwoButtonPressedToggle.js';

export function ButtonSelectionBypassOff(elementN){
    const id = 38; // Id use for config DataWriteList.js
    const elementId = 'buttonSelectionBypassOff'; // Id of button 
    const entity = new SelBypassOff();
    const elementClass = 'buttonSelectionBypassOff';



    const button = new PressButtonToSetFalseByClass(id, elementClass,elementN, entity,TwoButtonPressedToggleByClassWithDisable,'buttonSelectionPhysicalPosition','buttonSelectionLogicalPosition');
    return button;
}
