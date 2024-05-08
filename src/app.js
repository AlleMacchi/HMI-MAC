import { plcCommunicationManager } from './02.usecases/communication/PLCcommunication.js'
import { UpdateDisplay } from './06.ui/component/UpdateDisplay.js'

import { InitButtonsPages } from './06.ui/js/InitButtonsPages.js'
import { CarrierSpeedInput } from './06.ui/component/CarrierSpeedInput.js'
import { ResetButton } from './06.ui/component/ResetButton.js'
import { StartButton } from './06.ui/component/StartButton.js'
import { StopButton } from './06.ui/component/StopButton.js'

import { ButtonsPages} from './06.ui/component/ButtonsPages.js'
import {LoginButton} from './06.ui/component/LoginButton.js' 
import {AlarmsButton} from './06.ui/component/AlarmsButton.js'
import {ButtonClosePopup} from './06.ui/component/ButtonClosePopup.js' 



const App = {
    init: function(){
        // plcCommunicationManager.init();
        InitButtonsPages();
    },
    readData: function(){
        setInterval(async function() {          
            // UpdateDisplay();
        },1000);   
    },
    components: function(){
        // CarrierSpeedInput();
         ResetButton();
         StartButton();
         StopButton();

         ButtonsPages();
         LoginButton();
         AlarmsButton();
         ButtonClosePopup();
         
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    App.init();
    App.readData();
    App.components();
});