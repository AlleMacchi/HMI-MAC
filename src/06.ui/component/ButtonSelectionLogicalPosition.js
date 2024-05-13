import { SelLogicalPosition } from '../../01.entities/selection-logical-button/SelLogicalPosition.js';
import { PressButtonToSetTrue } from '../../99.utils/ui/PressButtonToSetTrue.js'; 
import { NormalButtonUI } from '../js/NormalButtonUI.js';

export function ButtonSelectionLogicalPosition(){
    const id = 10; // Id use for config DataWriteList.js
    const elementId = 'buttonSelectionLogicalPosition'; // Id of button 
    const entity = new SelLogicalPosition();
    const elementUI = new NormalButtonUI(elementId)

    const button = new PressButtonToSetTrue(id, elementId, entity, elementUI );
    return button;
}
