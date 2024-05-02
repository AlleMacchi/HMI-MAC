import { CarrierSpeed } from '../../01.entities/carrier-speed/CarrierSpeed.js';
import { UpdateNoBooleanValueUseCase } from '../../02.usecases/entities/UpdateNoBooleanValueUseCase.js';
import { UpdateNoBooleanValueRepository } from '../../03.repositories/entities/UpdateNoBooleanValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';  

const entity = new CarrierSpeed();
const repository = new UpdateNoBooleanValueRepository(plcCommunicationManager);
const usecase = new UpdateNoBooleanValueUseCase(repository, entity);

export function InputCarrierSpeed(inputId = 'set-carrierSpeed', elementId = 'btnSpeed') {
    const element = document.getElementById(elementId);
    const input = document.getElementById(inputId);

    function SetValue(event) {

        event.preventDefault();    
        const value = parseFloat(input.value);
    
        try {
            usecase.update(4, 'act-speed', value);
        } catch (error) {
          console.error('Error setting speed:', error);
        }
      }

      element.addEventListener('click', SetValue);

      return {
        SetValue
      };
}

