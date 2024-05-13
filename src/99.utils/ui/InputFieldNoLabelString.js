import { UpdateNoBooleanValueUseCase } from '../../02.usecases/entities/UpdateNoBooleanValueUseCase.js';
import { UpdateBooleanValueUseCase } from '../../02.usecases/entities/UpdateBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { ReadSavedPosition } from '../../01.entities/read-saved-position/ReadSavedPosition.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';
import { ShowPopup } from './Popup.js';
import { readBits, decodedString } from '../../99.utils/global/dataUtils.js';

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
    this.request = false;
    this.intervalId = setInterval(this.updatePosition.bind(this), 1000);
    
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

  async updatePosition() {
    if (this.request) {
      const PositionResult = await this.findOne(1);  
      const Result = decodedString( PositionResult.PLC_PositionResult); 
      if (Result > 0 && Result < 99) {
        const PositionResult_mm = await this.findOne(2);
        const valueToReach = document.getElementById(this.elementValuePosition);
        valueToReach.innerHTML = PositionResult_mm.PLC_PositionResult_mm + ' mm';
        this.usecaseReadSavePosition.update(24, false);
        this.request = false;
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
    const value = input.textContent;
    this.pressed = false;
    
    try {
      this.usecase.update(this.id, value);
      this.usecaseReadSavePosition.update(24,true);
      this.request = true;
      this.usecase.update(21, value);
      
      if (this.elementValuePosition != null) {
        const valueToReach = document.getElementById(this.elementValuePosition);
        valueToReach.innerHTML = '';
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
          this.pressed = false;
      }
  }
}



export { InputFieldNoLabelString };
