import { plcCommunicationManager } from './02.usecases/communication/PLCcommunication.js'
import { UpdateDisplay } from './06.ui/component/UpdateDisplay.js'

import { InitUI } from './06.ui/js/InitUI.js'
import { CarrierSpeedInput } from './06.ui/component/CarrierSpeedInput.js'
import { ResetButton } from './06.ui/component/ResetButton.js'
import { StartButton } from './06.ui/component/StartButton.js'
import { StopButton } from './06.ui/component/StopButton.js'



const App = {
    init: function(){
        // plcCommunicationManager.init();
        InitUI();
    },
    readData: function(){
        setInterval(async function() {          
            // UpdateDisplay();
        },1000);   
    },
    components: function(){
        // CarrierSpeedInput();
        // ResetButton();
        // StartButton();
        // StopButton();
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    App.init();
    App.readData();
    App.components();
});