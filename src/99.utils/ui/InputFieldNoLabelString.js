import { UpdateNoBooleanValueUseCase } from '../../02.usecases/entities/UpdateNoBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';
import { readBits, decodedString } from '../../99.utils/global/dataUtils.js';
import { ReadSavedPosition } from '../../01.entities/read-saved-position/ReadSavedPosition.js';
import { UpdateBooleanValueUseCase } from '../../02.usecases/entities/UpdateBooleanValueUseCase.js';
import { ShowPopup } from './Popup.js';
import { SetPhysicalPosition } from '../../01.entities/set-physical-position/SetPhysicalPosition.js';

class InputFieldNoLabelString {
  constructor(id, inputId, elementId, entity, elementUI, displayId) {
    this.id = id;
    this.inputId = inputId;
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
    this.intervalId = setInterval(this.updatePositionLabel.bind(this), 1000);
    
    this.element = document.getElementById(this.elementId);
    this.readSavePositionEntity = new ReadSavedPosition();
    this.usecaseReadSavePositionNoBoolean = new UpdateNoBooleanValueUseCase(this.repository, this.readSavePositionEntity);
    this.usecaseReadSavePosition = new UpdateBooleanValueUseCase(this.repository, this.readSavePositionEntity);

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

  async updatePositionLabel() {
    if (this.request) {
      const PositionResult = await this.findOne(1);  
      const Result = decodedString( PositionResult.PLC_PositionResult); 
      if (Result > 0 && Result < 99) {
        const PositionResult_mm = await this.findOne(2);
        const Position = document.getElementById(this.displayId);
        Position.innerHTML = PositionResult_mm.PLC_PositionResult_mm + ' mm';
        if ( this.id == 21){
          this.usecaseReadSavePosition.update(24,false);
        }
  
        if ( this.id == 22){
          this.usecaseReadSavePosition.update(23,false);
        }

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
    const input = document.getElementById(this.inputId);
    let value = '';
    let logicalPosition = document.getElementById('logicalPosition_section3').textContent;
    
    // if the input is an input field, get the value not the textContent

    if (input.tagName === 'INPUT') {
      if(this.id == 22){
      value = parseFloat(input.value);
    }else{ 
        value = input.value;  
      }
    }else{
      // in this case value and logicalPosition are the same
      value = input.textContent;
    }
    this.pressed = false;
    
    
    try {
      
      let errors = [];
      //checking before writing will trhow an error if the value is not valid before try writing
      // the other Object were not passed paramenter To Do another validate where pass parameters (poly)
      // this is for the Physical set position (id )
      
      if ( this.id == 21){
                const tempEntitylogicalPosition = new ReadSavedPosition(1, logicalPosition);
        errors.push(...tempEntitylogicalPosition.validate());
      }

      if ( this.id == 22){
        const tempEntitySetPhysicalPosition = new SetPhysicalPosition(1, value);
        const tempEntitylogicalPosition = new ReadSavedPosition(1, logicalPosition);
        errors.push(...tempEntitylogicalPosition.validate(),...tempEntitySetPhysicalPosition.validate());      
      }

      const Position = document.getElementById(this.displayId);
      
      if (errors.length > 0) {
        this.elementUI.showUnpressed();
        Position.innerHTML = '-';
        ShowPopup(errors.join('<br>'));
        return;
      }

      if ( this.id == 21){
        this.usecase.update(this.id, value);
        this.usecaseReadSavePosition.update(24,true);
      }

      if ( this.id == 22){
        this.usecaseReadSavePositionNoBoolean.update(21,logicalPosition);
        this.usecase.update(this.id, value);
        this.usecaseReadSavePosition.update(23,true);
      }
  
      this.request = true;
            
      if (this.displayId != null) {
        const savedPosition = document.getElementById(this.displayId);
        savedPosition.innerHTML = '-';
      }

      errors.push(...this.entity.validate());
      if (errors.length > 0) {
        this.elementUI.showUnpressed();
        const Position = document.getElementById(this.displayId);
        Position.innerHTML = '-';
        
      }
      
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

export { InputFieldNoLabelString };
