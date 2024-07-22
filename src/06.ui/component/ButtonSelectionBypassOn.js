import { SelBypassOn } from '../../01.entities/selection-bypassOn-button/SelBypassOn.js';
import { PressButtonToSetTrue } from '../../99.utils/ui/PressButtonToSetTrue.js'; 
import { TwoButtonPressedToggle, TwoButtonPressedToggleByClass, TwoButtonPressedToggleByClassWithDisable } from '../../99.utils/ui/TwoButtonPressedToggle.js';
import { PressButtonToSetTrueByClass } from '../../99.utils/ui/PressButtonToSetTrueByClass.js';


export function ButtonSelectionBypassOn(elementN){
    const id = 38; // Id use for config DataWriteList.js
    const elementId = 'buttonSelectionBypassOn'; // Id of button 
    const entity = new SelBypassOn();
    const elementClass = 'buttonSelectionBypassOn';
   

    const button = new PressButtonToSetTrueByClass(id, elementClass,elementN, entity,TwoButtonPressedToggleByClass,'buttonSelectionBypassOn','buttonSelectionBypassOff');


    return button;
}
