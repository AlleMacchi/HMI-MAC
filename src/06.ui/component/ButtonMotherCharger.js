import { ChargerButton } from '../../01.entities/charger-button/ChargerButton.js';
import { NormalButtonUI } from '../js/NormalButtonUI.js';
import { PressButtonToggle } from '../../99.utils/ui/PressButtonToggle.js';

export function ButtonMotherCharger(){
    const id = 12; // Id use for config DataWriteList.js
    const elementId = 'btn_Charger'; // Id of button 
    const entity = new ChargerButton();
    // const elementClass = 'buttonReset';

    const button = new PressButtonToggle(id, elementId, entity );
    return button;
}
