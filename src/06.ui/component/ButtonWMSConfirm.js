
import { NormalButtonUI } from '../js/NormalButtonUI.js';
import {  WMSConfirm } from '../../01.entities/wms-confirm/wmsConfirm.js';
import { InputFieldNoLabel } from '../../99.utils/ui/InputFieldNoLabel.js';
import { WMSId } from '../../01.entities/wms-id/wmsId.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js';
import { InputFieldNoLabelCoordinate } from '../../99.utils/ui/inputFieldNoLabelCoordinate.js';
import { WMSTaskNumber } from '../../01.entities/wms-taskNumber/wmsTaskNumber.js';
import { WMSCoordinate } from '../../01.entities/wms-coordinate/wmsCoordinate.js';
import { WMSEchoStatus } from '../../01.entities/wms-echo-status/wmsEchoStatus.js';



export function ButtonWMSConfirm(){

    const id = 29; // Id use for config DataWriteList.js
    const elementId = 'buttonWMSConfirm'; // Id of button  
    const entity = new WMSConfirm();
    const elementUI = new NormalButtonUI(elementId);
    const timeToHoldExecute = 300;

     
    //Input Message Id
    const inputId_WMSId = 25; // Id use for config DataWriteList.js
    const inputElementId_WMSId = elementId; // Id of button
    const inputField_WMSId = 'message_id_input';
    const inputEntity_WMSId = new WMSId();
    const input_WMSId = new InputFieldNoLabel(inputId_WMSId, inputField_WMSId, inputElementId_WMSId, inputEntity_WMSId);

    //Input Task Number
    const inputId_WMSTaskNumber = 26; // Id use for config DataWriteList.js
    const inputElementId_WMSTaskNumber = elementId; // Id of button
    const inputField_WMSTaskNumber = 'message_taskNumber_input';
    const inputEntity_WMSTaskNumber = new WMSTaskNumber();
    const input_WMSTaskNumber = new InputFieldNoLabel(inputId_WMSTaskNumber, inputField_WMSTaskNumber, inputElementId_WMSTaskNumber, inputEntity_WMSTaskNumber);

    //Input Coordinate
    const inputId_WMSCoordinate = 27; // Id use for config DataWriteList.js
    const inputElementId_WMSCoordinate = elementId; // Id of button
    // const inputField_WMSCoordinate = 'coordinate_output';
    const inputRow = 'message_coordinateRow_input';
    const inputDir ='dropdown-toggle_Section5';
    const inputCol = 'message_coordinateCol_input';
    const inputEntity_WMSCoordinate = new WMSCoordinate();
    const input_WMSCoordinate = new InputFieldNoLabelCoordinate(inputId_WMSCoordinate, inputRow , inputDir, inputCol, inputElementId_WMSCoordinate, inputEntity_WMSCoordinate);

    //Input Echo Status
    const inputId_WMSEchoStatus = 28; // Id use for config DataWriteList.js
    const inputElementId_WMSEchoStatus = elementId; // Id of button
    const inputField_WMSEchoStatus = 'message_echoStatus_input';
    const inputEntity_WMSEchoStatus = new WMSEchoStatus();
    const input_WMSEchoStatus = new InputFieldNoLabel(inputId_WMSEchoStatus, inputField_WMSEchoStatus, inputElementId_WMSEchoStatus, inputEntity_WMSEchoStatus);

     // Instantiate PressAndHoldButton after InputFieldNoLabel
   const button = new PressAndHoldButton(id, elementId, entity, elementUI,validateWMSMessage, timeToHoldExecute,);


   function validateWMSMessage() {
    const validate_inputEntity_WMSId = new WMSId(inputId_WMSId, parseFloat(inputEntity_WMSId.value));
    const validate_inputEntity_WMSTaskNumber = new WMSTaskNumber(inputId_WMSTaskNumber, parseFloat(inputEntity_WMSTaskNumber.value));
    const validate_inputEntity_WMSCoordinate = new WMSCoordinate(inputId_WMSCoordinate, parseFloat(inputEntity_WMSCoordinate.value));
    const validate_inputEntity_WMSEchoStatus = new WMSEchoStatus(inputId_WMSEchoStatus, parseFloat(inputEntity_WMSEchoStatus.value));

    const validationErrors = [...validate_inputEntity_WMSId.validate(), ...validate_inputEntity_WMSTaskNumber.validate(), ...validate_inputEntity_WMSCoordinate.validate(), ...validate_inputEntity_WMSEchoStatus.validate()];
    if (validationErrors.length > 0) {
        console.error('Validation errors:', validationErrors);
        return false;
    }
    return true;
    }

   // Attach event listeners for PressAndHoldButton
   const buttonElement = document.getElementById(elementId);
   buttonElement.addEventListener('mousedown', button.handleMouseDown);
   buttonElement.addEventListener('touchstart', button.handleMouseDown);


    
    return { button, input_WMSId, input_WMSTaskNumber, input_WMSEchoStatus, input_WMSCoordinate};

}



