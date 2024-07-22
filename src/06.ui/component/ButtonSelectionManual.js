import { SelMan } from '../../01.entities/selection-Manual/SelMan.js';
import { PressButtonToSetFalse } from '../../99.utils/ui/PressButtonToSetFalse.js'; 
import { TwoButtonPressedToggle, TwoButtonPressedToggleByClass, TwoButtonPressedToggleByClassWithDisable } from '../../99.utils/ui/TwoButtonPressedToggle.js';


export function ButtonSelectionManual(){
    const id = 1; // Id use for config DataWriteList.js
    const elementId = 'btn_sel_man'; // Id of button 
    const entity = new SelMan();
   
   // id,elementId,entity, callback, firstButtonId, secondButtonId
    const button = new PressButtonToSetFalse(id, elementId, entity,TwoButtonPressedToggle,'btn_sel_man','btn_sel_auto');


    return button;
}
