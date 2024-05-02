import { UpdateNoBooleanValueUseCase } from '../../02.usecases/entities/UpdateNoBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';
import { UpdateLabel } from '../../99.utils/ui/UpdateLabel.js'; 

class InputFieldWithLabel {
  constructor(id, inputId, elementId, displayId, entity) {
    this.id = id;
    this.inputId = inputId;
    this.elementId = elementId;
    this.displayId = displayId;
    this.entity = entity;
    this.repository = new UpdateValueRepository(plcCommunicationManager);
    this.usecase = new UpdateNoBooleanValueUseCase(this.repository, this.entity);
    
    this.SetValue = this.SetValue.bind(this);
    
    this.element = document.getElementById(this.elementId);
    this.element.addEventListener('click', this.SetValue);

  }

  SetValue(event) {
    event.preventDefault();
    const input = document.getElementById(this.inputId);
    const value = parseFloat(input.value);
    
    try {
      this.usecase.update(this.id, value);

      const errors = this.entity.validate();
      if (errors.length == 0) {
        try {
            UpdateLabel(this.entity.toString(), this.displayId);
        } catch (error) {
            console.error("Error updating display:", error);
        } 
      } else {
        input.value = '';
      }

    } catch (error) {
      console.error('Error setting value:', error);
    }
  }

}

export { InputFieldWithLabel };
