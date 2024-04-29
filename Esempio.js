// entities/CarrierSpeed.js
class CarrierSpeed {
    constructor(id, value) {
      this.id = id;
      this.value = value;
    }
  
    isValid() {
      // Add your validation logic here
      return typeof this.value === 'number' && this.value >= 0 && this.value <= 100;
    }
  }
  
  export { CarrierSpeed };
  
  // useCases/SetValueUseCase.js
  class SetValueUseCase {
    constructor(valueRepository, validator) {
      this.valueRepository = valueRepository;
      this.validator = validator;
      this.displayElement = document.getElementById('act-speed');
    }
  
    execute(id, value) {
      if (!this.validator.isValid(value)) {
        alert('Invalid value');
      } else {
        this.valueRepository.setValue(id, value);
        this.updateDisplay(value);
      }
    }
  
    updateDisplay(value) {
      this.displayElement.innerHTML = `${value} <span>&nbsp;%</span>`;
    }
  }
  
  export { SetValueUseCase };
  
  // validator.js
  class Validator {
    constructor(entity) {
      this.entity = entity;
    }
  
    isValid(value) {
      const entityInstance = new this.entity(null, value); // You can pass null for id if it's not required in the constructor
      return entityInstance.isValid();
    }
  }
  
  export { Validator };
// ==========================================================
import { SetValueUseCase } from './useCases/SetValueUseCase.js';
import { Validator } from './validator.js';
import { CarrierSpeed } from './entities/CarrierSpeed.js';

const validator = new Validator(CarrierSpeed);
const useCase = new SetValueUseCase(valueRepository, validator);
