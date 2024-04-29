import { plcCommunicationManager } from './useCases/Communication/PLCCommunicationManager.js';  
import { SetValueRepository } from './repositories/Presentation/SetValueRepository.js'; 
import { ToggleValueRepository } from './repositories/Presentation/ToggleValueRepository.js'; 
import { SetValueUseCase } from './useCases/Presentation/setValueUseCase.js'; 
import { ToggleValueUseCase } from './useCases/Presentation/ToggleValueUseCase.js'; 
import { InputComponent } from './presentation/component/InputComponent.js'; 
import { ToggleComponent } from './presentation/component/toogleComponent.js'; 
import { Validator } from './utils/validator.js'; 
import { ButtonToggle } from './entities/ButtonToggle.js'; 

const App = {
    init: function(){
        plcCommunicationManager.init();
    },
    readData: function(){
        setInterval(function() {
            plcCommunicationManager.fetchData();  
        },1000);   
    }
}

$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    App.init();
    App.readData();

    // const setValueRepository = new SetValueRepository(plcCommunicationManager);
    // const setValueUseCase = new SetValueUseCase(setValueRepository);
    // const inputComponent = new InputComponent(setValueUseCase);

    const ButtonManAuto = new ButtonToggle('btnReset','btnReset');
    const validator = new Validator(ButtonManAuto);
    const toggleValueRepository = new ToggleValueRepository(plcCommunicationManager);
    const useCase = new ToggleValueUseCase(toggleValueRepository, validator);
    const toggleComponent = new ToggleComponent(useCase,ButtonManAuto);
});
