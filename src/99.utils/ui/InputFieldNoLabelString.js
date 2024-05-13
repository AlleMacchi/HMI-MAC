import { UpdateNoBooleanValueUseCase } from '../../02.usecases/entities/UpdateNoBooleanValueUseCase.js';
import { UpdateBooleanValueUseCase } from '../../02.usecases/entities/UpdateBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { ReadSavedPosition } from '../../01.entities/read-saved-position/ReadSavedPosition.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';
import { ShowPopup } from './Popup.js';

class InputFieldNoLabelString {
  constructor(id, inputId, elementId, entity, elementUI, elementValuePosition=null) {
    this.id = id;
    this.inputId = inputId;
    this.elementId = elementId;
    this.entity = entity;
    this.repository = new UpdateValueRepository(plcCommunicationManager);
    this.usecase = new UpdateNoBooleanValueUseCase(this.repository, this.entity);
    this.elementUI = elementUI;
    this.pressed = false;
    this.elementValuePosition = elementValuePosition;
    
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.findOne = this.findOne.bind(this);
    
    this.element = document.getElementById(this.elementId);
    this.readSavePositionEntity = new ReadSavedPosition();
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


  handleMouseDown(event) {
    event.preventDefault();
    this.elementUI.showPressed();

  }


  async handleMouseUp(event) {
    event.preventDefault();
    this.elementUI.showUnpressed();
    const input = document.getElementById(this.inputId);
    const value = input.textContent;
    
    try {
      this.usecase.update(this.id, value);
      this.usecaseReadSavePosition.update(this.id,true);
      if (this.elementValuePosition != null) {
        const valueToReach = document.getElementById(this.elementValuePosition);
        valueToReach.innerHTML = '';
        const PositionResult = await this.findOne(1);
        const PositionResult_mm = await this.findOne(2);
        if (PositionResult>0 && PositionResult<99){
          valueToReach.innerHTML = PositionResult_mm +' mm';
          this.usecaseReadSavePosition.update(this.id,false);
        }
      }

      const errors = this.entity.validate();
      if (errors.length > 0) {
        this.elementUI.showUnpressed();
        input.innerHTML = '';
      }



    } catch (error) {
      console.error('Error setting value:', error);
      ShowPopup('Data Invalid','Alert');
    }
}

  handleMouseLeave(event) {
      if (this.pressed) {
          this.elementUI.showUnpressed();
      }
  }



}

export { InputFieldNoLabelString };
