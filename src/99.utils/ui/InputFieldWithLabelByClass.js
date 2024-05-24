import { UpdateNoBooleanValueUseCase } from '../../02.usecases/entities/UpdateNoBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';
import { UpdateLabel } from '../../99.utils/ui/UpdateLabel.js'; 
import { UpdateLabelByClass } from './UpdateLabelByClass.js';

class InputFieldWithLabelByClass {
  constructor(id, inputField, elementClass,elementN, displayClass, entity) {
    this.id = id;
    this.inputField = inputField;
    this.elementClass = elementClass;
    this.displayClass = displayClass;
    this.elementN = elementN;
    this.entity = entity;
    this.repository = new UpdateValueRepository(plcCommunicationManager);
    this.usecase = new UpdateNoBooleanValueUseCase(this.repository, this.entity);
    
    this.SetValue = this.SetValue.bind(this);
    
    this.element = document.getElementsByClassName(this.elementClass)[elementN];
    this.element.addEventListener('click', this.SetValue);

  }

  SetValue(event) {
    event.preventDefault();
    const input = document.getElementsByClassName(this.inputField)[this.elementN];
    const value = parseFloat(input.value);
    
    try {
      this.usecase.update(this.id, value);

      const errors = this.entity.validate();
      if (errors.length == 0) {
        try {
            UpdateLabelByClass(this.entity.toString(), this.displayClass, this.elementN);
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

export { InputFieldWithLabelByClass };
