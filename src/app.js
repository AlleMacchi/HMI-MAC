// Init Section:
import { plcCommunicationManager } from './02.usecases/communication/PLCcommunication.js'
import { InitButtonsPages } from './06.ui/js/InitButtonsPages.js'

// Read Data Section:
import { UpdateDisplay } from './06.ui/component/UpdateDisplay.js'

// Components Section:
import { ResetButton } from './06.ui/component/ButtonReset.js'
import { StartButton } from './06.ui/component/ButtonStart.js'
import { StopButton } from './06.ui/component/ButtonStop.js'
import { StepSelection } from './06.ui/component/DropupStepSelection.js'
import { StepConfirmButton } from './06.ui/component/ButtonStepConfirm.js'

import { ButtonsPages} from './06.ui/component/ButtonsPages.js'
import { LoginButton } from './06.ui/component/ButtonLogin.js' 
import { ButtonClosePopup } from './06.ui/component/ButtonClosePopup.js' 



const App = {
    init: function(){
        plcCommunicationManager.init();
        InitButtonsPages();
    },
    readData: function(){
        setInterval(async function() {          
            UpdateDisplay();
        },1000);   
    },
    components: function(){
         ResetButton();
         StartButton();
         StopButton();
         StepSelection();
         StepConfirmButton();

         ButtonsPages();
         LoginButton();
         ButtonClosePopup();
         
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    App.init();
    App.readData();
    App.components();
});