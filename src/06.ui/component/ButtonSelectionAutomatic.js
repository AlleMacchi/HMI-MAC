import { SelAuto } from '../../01.entities/selection-Automatic/SelAuto.js';
import { PressButtonToSetTrue } from '../../99.utils/ui/PressButtonToSetTrue.js'; 
import { TwoButtonPressedToggle, TwoButtonPressedToggleByClass, TwoButtonPressedToggleByClassWithDisable } from '../../99.utils/ui/TwoButtonPressedToggle.js';


export function ButtonSelectionAutomatic(){
    const id = 1; // Id use for config DataWriteList.js
    const elementId = 'btn_sel_auto'; // Id of button 
    const entity = new SelAuto();
   
   // id,elementId,entity, callback, firstButtonId, secondButtonId
    const button = new PressButtonToSetTrue(id, elementId, entity,TwoButtonPressedToggle,'btn_sel_auto','btn_sel_man');


    return button;
}
