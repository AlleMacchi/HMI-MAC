import { plcCommunicationManager } from './useCases/Communication/PLCCommunicationManager.js';  
import { SetValueRepository } from './repositories/Presentation/SetValueRepository.js'; 
import { SetValueUseCase } from './useCases/Presentation/setValueUseCase.js'; 
import { InputComponent } from './presentation/component/InputComponent.js'; 

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

    const setValueRepository = new SetValueRepository(plcCommunicationManager);
    const setValueUseCase = new SetValueUseCase(setValueRepository);
    const inputComponent = new InputComponent(setValueUseCase);
});
