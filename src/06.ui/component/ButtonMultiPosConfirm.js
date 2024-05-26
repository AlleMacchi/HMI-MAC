import { copyActPosition } from "../../01.entities/copy-act-position-button/copyActPosition.js";
import { ButtonNoWrite } from "../../99.utils/ui/ButtonNoWrite.js";
import { NormalButtonUI } from "../js/NormalButtonUI.js";
import { Row } from "../../01.entities/row/Row.js";
import { InputFieldsMultiWithLabel } from "../../99.utils/ui/InputFieldsMultiWithLabel.js";




export function ButtonMultiPosConfirm(){
    const elementId = 'buttonConfirmCopy'; // Id of button 
    const elementUI = new NormalButtonUI(elementId);

    const sourceId = 30; // Id use for config 17.js
    const FromId = 31;
    const ToId = 32;
    const updateId = 36;
    const inputSourceId = 'sourceRowInput';
    const inputFromId = 'copyFromRows';
    const inputToId = 'copyToRows';
    const inputEntity = new Row();
    const messageConfirm = 'messageSpan'; 

    // const input = new InputFieldWithLabelByClass(inputId, inputField, inputElementClass,elementN, displayClass, inputEntity);
    const input = new InputFieldsMultiWithLabel(sourceId,FromId,ToId,updateId, inputSourceId,inputFromId,inputToId, elementId, inputEntity,elementUI, messageConfirm)

    const allInputIds = [inputSourceId,inputFromId,inputToId];
    allInputIds.forEach(element => {
        document.getElementById(element).addEventListener('focus', function() {
            document.getElementById('messageSpan').innerHTML = '-';
        });
    });
   

    // Attach event listeners for PressAndHoldButton
    // const buttonElement = document.getElementById(elementId);
    // buttonElement.addEventListener('mousedown', elementUI.showPressed());
    // buttonElement.addEventListener('touchstart', elementUI.showPressed());
    // buttonElement.addEventListener('mouseup', elementUI.showUnpressed());    
    // buttonElement.addEventListener('touchend', elementUI.showUnpressed());
    // buttonElement.addEventListener('mouseleave', elementUI.showUnpressed());
    
    return { input };
}
