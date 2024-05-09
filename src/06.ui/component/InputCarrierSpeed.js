import { CarrierSpeed } from '../../01.entities/carrier-speed/CarrierSpeed.js';
import { InputFieldWithLabel } from '../../99.utils/ui/InputFieldWithLabel.js'; 

export function CarrierSpeedInput(){
        
    const id = 16; // Id use for config DataWriteList.js
    const inputId = 'set-carrierSpeed'; // Id of Input Field 
    const elementId = 'btnSpeed'; // Id of confirm button 
    const displayId = 'act-speed'; // Id of label 
    const entity = new CarrierSpeed();

    const input = new InputFieldWithLabel(id, inputId, elementId, displayId, entity);    
    return input;
}