import { CarrierSpeed } from '../../entities/CarrierSpeed.js'; 

class SetValueUseCase {
    constructor(valueRepository) {
      this.valueRepository = valueRepository;
      this.displayElement = document.getElementById('act-speed');
    }
  
    execute(id, value) {
      const speed = new CarrierSpeed(id,value);
  
      if (!speed.isValid()) {
        // throw new Error('Invalid position value');
        alert('Invalid value');
      }else{
        this.valueRepository.setValue(id,value);
        this.updateDisplay(value);
      }
  

    }


    updateDisplay(value) {
      this.displayElement.innerHTML = `${value} <span>&nbsp;%</span>`;
    }
  }



  export { SetValueUseCase };