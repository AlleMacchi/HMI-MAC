import { UpdateNoBooleanValueUseCase } from '../../02.usecases/entities/UpdateNoBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';
import { GenerateLogicalPositionString } from '../../99.utils/ui/GenerateLogicalPositionString.js'

class InputFieldNoLabelCoordinate {
  constructor(id, inputRow ,inputDir, inputCol, elementId, entity) {
    this.id = id;
    this.inputRow = inputRow;
    this.inputDir = inputDir;
    this.inputCol = inputCol;
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
    const inputR = document.getElementById(this.inputRow);
    const inputC = document.getElementById(this.inputCol);
    const inputD = document.getElementById(this.inputDir);
    const Dir = inputD.textContent.trim() === 'A' ? 0 : 1;
    // console.log('inputR', inputR.value);
    // console.log('inputD', inputD.textContent.trim());
    // console.log('Dir', Dir);
    // console.log('inputC', inputC.value);
    const value = GenerateLogicalPositionString(inputR.value,inputC.value,Dir);
    
    try {
      
      this.usecase.update(this.id, value);
      // console.log('value', value);
      const errors = this.entity.validate();
      if (errors.length > 0) {
        inputR.value = '';
        inputC.value = '';
      }

    } catch (error) {
      console.error('Error setting value:', error);
    }
  }

}

export { InputFieldNoLabelCoordinate };
