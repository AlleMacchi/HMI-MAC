import { copyActPosition } from "../../01.entities/copy-act-position-button/copyActPosition.js";
import { ButtonNoWrite } from "../../99.utils/ui/ButtonNoWrite.js";
import { NormalButtonUI } from "../js/NormalButtonUI.js";
import { Row } from "../../01.entities/row/Row.js";
import { Column } from "../../01.entities/column/Column.js";
import { InputFieldsMultiWithLabel } from "../../99.utils/ui/InputFieldsMultiWithLabel.js";
import config from "../../00.config/config.js";




export function ButtonMultiPosConfirm(){
    const elementId = 'buttonConfirmCopy'; // Id of button 
    const elementUI = new NormalButtonUI(elementId);

    let sourceId = null;
    let FromId = null;
    let ToId = null;
    const updateId = 36;
    const inputSourceId = 'sourceInput';
    const inputFromId = 'copyFromInput';
    const inputToId = 'copyToInput';
    let inputEntity = {}; 

    if(config.isMotherShuttle){
        inputEntity = new Column();
        sourceId = 33;
        FromId = 34;
        ToId = 35;
    }else{
        inputEntity = new Row();
        sourceId = 30;
        FromId = 31;
        ToId = 32;
    }
    
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
