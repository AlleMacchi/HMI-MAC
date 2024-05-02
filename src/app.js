import { plcCommunicationManager } from './02.usecases/communication/PLCcommunication.js';  

import { CarrierSpeedInput } from './05.ui/component/CarrierSpeedInput.js'
import { ResetButton } from './05.ui/component/ResetButton.js'
import { StartButton } from './05.ui/component/StartButton.js'
import { StopButton } from './05.ui/component/StopButton.js'


const App = {
    init: function(){
        plcCommunicationManager.init();
    },
    readData: function(){
        setInterval(function() {            
            plcCommunicationManager.findAll();
        },1000);   
    },
    components: function(){
        CarrierSpeedInput();
        ResetButton();
        StartButton();
        StopButton();
    }
    
}

$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    App.init();
    App.readData();
    App.components();
});
