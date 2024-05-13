import { SelPhysicalPosition } from '../../01.entities/selection-physical-button/SelPhysicalPosition.js';
import { PressButtonToSetFalse } from '../../99.utils/ui/PressButtonToSetFalse.js'; 
import { NormalButtonUI } from '../js/NormalButtonUI.js';

export function ButtonSelectionPhysicalPosition(){
    const id = 10; // Id use for config DataWriteList.js
    const elementId = 'buttonSelectionLogicalPosition'; // Id of button 
    const entity = new SelPhysicalPosition();
    const elementUI = new NormalButtonUI(elementId)

    const button = new PressButtonToSetFalse(id, elementId, entity, elementUI );
    return button;
}
