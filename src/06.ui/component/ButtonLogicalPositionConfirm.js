import config from '../../00.config/config.js';
import { SetLogicalPosition} from '../../01.entities/set-logical-position/SetLogicalPosition.js'
import { InputFieldNoLabelStringByClass } from '../../99.utils/ui/InputFieldNoLabelStringByClass.js';
import { NormalButtonUIByClass } from '../js/NormalButtonUIByClass.js';

export function ButtonLogicalPositionConfirm(elementN){
    const currentPosition = 'current-logical-position';
    const elementId = 'buttonConfirmLogicalPosition'; // Id of button 
    const elementClass = 'buttonConfirmLogicalPosition';
    const elementUI = new NormalButtonUIByClass(elementClass, elementN);
    
    const inputId = 18; // Id use for config DataWriteList.js
    const inputElementId = elementId; // Id of button 
    const inputField = 'section-logical-position';
    const inputEntity = new SetLogicalPosition(inputId,inputField,currentPosition,config.isMotherShuttle);
    const idSavedPosition = 'section-logical-position-mm';
    

    const input = new InputFieldNoLabelStringByClass(inputId, inputField, elementClass,elementN, inputEntity, elementUI,idSavedPosition);

    return { input };
}