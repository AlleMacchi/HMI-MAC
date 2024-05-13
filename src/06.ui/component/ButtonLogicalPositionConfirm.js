import { SetLogicalPosition} from '../../01.entities/set-logical-position/SetLogicalPosition.js'
import { InputFieldNoLabelString } from '../../99.utils/ui/InputFieldNoLabelString.js'; 
import { NormalButtonUI } from '../js/NormalButtonUI.js';

export function ButtonLogicalPositionConfirm(){
    const currentPosition = 'current-logical-position';
    const elementId = 'buttonConfirmLogicalPosition'; // Id of button 
    const elementUI = new NormalButtonUI(elementId);

    const inputId = 18; // Id use for config DataWriteList.js
    const inputElementId = elementId; // Id of button 
    const inputField = 'section2-logical-position';
    const inputEntity = new SetLogicalPosition(inputId,inputField,currentPosition,false);
    const idSavedPosition = 'section2-logical-position-mm';

    const input = new InputFieldNoLabelString(inputId, inputField, inputElementId, inputEntity, elementUI,idSavedPosition);

    return { input };
}