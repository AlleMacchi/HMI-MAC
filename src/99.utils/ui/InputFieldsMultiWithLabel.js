import { UpdateNoBooleanValueUseCase } from '../../02.usecases/entities/UpdateNoBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';
import { readBits, decodedString } from '../../99.utils/global/dataUtils.js';
import { ReadSavedPosition } from '../../01.entities/read-saved-position/ReadSavedPosition.js';
import { UpdateBooleanValueUseCase } from '../../02.usecases/entities/UpdateBooleanValueUseCase.js';
import { ShowPopup } from './Popup.js';
import { Row } from '../../01.entities/row/Row.js';
import { Column } from '../../01.entities/column/Column.js';

class InputFieldsMultiWithLabel {
  constructor(sourceId,fromId,toId,updateId,inputSourceId,inputFromId,inputToId, elementId, entity,elementUI, displayId) {
    this.id = updateId;
    this.sourceId = sourceId;
    this.fromId = fromId;
    this.toId = toId;
    this.inputSourceId = inputSourceId;
    this.inputFromId = inputFromId;
    this.inputToId = inputToId;
    this.elementId = elementId;
    this.entity = entity;
    this.elementUI = elementUI;
    this.displayId = displayId;

    this.repository = new UpdateValueRepository(plcCommunicationManager);
    this.usecase = new UpdateNoBooleanValueUseCase(this.repository, this.entity);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.findOne = this.findOne.bind(this);
    this.request = false;
    this.intervalId = setInterval(this.updateMessageLabel.bind(this), 1000);
    
    this.element = document.getElementById(this.elementId);
    this.updateSet = new UpdateBooleanValueUseCase(this.repository, this.entity);

    this.element.addEventListener('mousedown', this.handleMouseDown);
    this.element.addEventListener('touchstart', this.handleMouseDown);
    this.element.addEventListener('mouseup', this.handleMouseUp);    
    this.element.addEventListener('touchend', this.handleMouseUp);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);

  }


  async findOne(id) {
    try {
      return await plcCommunicationManager.findOne(id);
    } catch (error) {
      throw error;
    }
  }

  async updateMessageLabel() {
    if (this.request) {
      const PositionResult = await this.findOne(1);  
      const Result = decodedString( PositionResult.PLC_PositionResult); 
      if (Result > 0 && Result < 99) {
        const messageConfirm = document.getElementById(this.displayId);
        messageConfirm.innerHTML = 'Done';
        
        this.updateSet.update(36,false);
        
        this.request = false;

        // const valueIn_mm = decodedString(PositionResult_mm.PLC_PositionResult_mm);
        // if (valueIn_mm === 0) {
        //   ShowPopup('The logical position has a physical position of zero. <br> The physical position cannot be zero.');
        // }
      }
    }
  }

  handleMouseDown(event) {
    event.preventDefault();
    this.elementUI.showPressed();
    this.pressed = true;
  }


  async handleMouseUp(event) {
    event.preventDefault();
    this.elementUI.showUnpressed();
    const sourceInput = document.getElementById(this.inputSourceId);
    const fromInput = document.getElementById(this.inputFromId);
    const toInput = document.getElementById(this.inputToId);

    let sourceValue = parseFloat(sourceInput.value);
    let fromValue = parseFloat(fromInput.value);
    let toValue = parseFloat(toInput.value);
    this.pressed = false;
    
    try {

        let errorsArr = [];  
        

        
        const allInputs = [sourceValue, fromValue, toValue];
        allInputs.forEach((input, index) => {
            
          if (this.entity instanceof Row){
          const tempRow = new Row(index, input);
            errorsArr.push(...tempRow.validate(index,input));
          }

          if(this.entity instanceof Column){
            const tempColumn = new Column(index, input);
            errorsArr.push(...tempColumn.validate(index,input));
          }

          });
        
          if ( fromValue > toValue){
            errorsArr.push('The "From" input value must be less than the "To" input value.');
        }
        
        const errorsSet = new Set(errorsArr);
        let errors = [...errorsSet];
        if (errors.length > 0) {
          this.elementUI.showUnpressed();
          const messageConfirm = document.getElementById(this.displayId);
          messageConfirm.innerHTML = '-';
          ShowPopup(errors.join('<br>'));
          return;
        }


        if (this.displayId != null) {
          const messageConfirm = document.getElementById(this.displayId);
          messageConfirm.innerHTML = '-';
        }
        
        this.usecase.update(this.sourceId, sourceValue);
        this.usecase.update(this.fromId, fromValue);
        this.usecase.update(this.toId, toValue);
        
        setTimeout(() => {
        this.updateSet.update(this.id,true);
        }, 300);

      this.request = true;
            
    
      
      
    } catch (error) {
      console.error('Error setting value:', error);
    }
}

  handleMouseLeave(event) {
      if (this.pressed) {
          this.elementUI.showUnpressed();
          this.pressed = false;
      }
  }
  

}

export { InputFieldsMultiWithLabel };
