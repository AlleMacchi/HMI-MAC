
import { NormalButtonUI } from '../js/NormalButtonUI.js';
import { WMSConfirm } from '../../01.entities/wms-confirm/WMSConfirm.js';


export function ButtonWMSConfirm(){

    const id = 8; // Id use for config DataWriteList.js
    const inputEntity = new WMSConfirm(id);
    const elementId = 'WMSConfirmButton'; // Id of button   
    const elementUI = new NormalButtonUI(elementId);

    

}