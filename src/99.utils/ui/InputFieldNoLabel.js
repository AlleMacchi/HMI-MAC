import { UpdateNoBooleanValueUseCase } from '../../02.usecases/entities/UpdateNoBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';

class InputFieldNoLabel {
  constructor(id, inputId, elementId, entity) {
    this.id = id;
    this.inputId = inputId;
    this.elementId = elementId;
    this.entity = entity;
    this.repository = new UpdateValueRepository(plcCommunicationManager);
    this.usecase = new UpdateNoBooleanValueUseCase(this.repository, this.entity);
    
    this.setValue = this.setValue.bind(this);
    
    this.element = document.getElementById(this.elementId);
   // this.element.addEventListener('click', this.SetValue);

    this.element.addEventListener('mousedown', this.setValue);
    this.element.addEventListener('touchstart', this.setValue);

  }


  setValue(event) {
    event.preventDefault();
    const input = document.getElementById(this.inputId);
    const value = parseFloat(input.value);
    
    try {
      this.usecase.update(this.id, value);

      const errors = this.entity.validate();
      if (errors.length > 0) {
        input.value = '';
      }

    } catch (error) {
      console.error('Error setting value:', error);
    }
  }

}

export { InputFieldNoLabel };
