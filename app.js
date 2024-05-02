import { plcCommunicationManager } from './cleanArchitecture/02.usecases/communication/PLCcommunication.js';  
import { InputCarrierSpeed } from './cleanArchitecture/05.ui/component/InputCarrierSpeed.js'

const App = {
    init: function(){
        plcCommunicationManager.init();
    },
    readData: function(){
        setInterval(function() {
            plcCommunicationManager.findAll();  
        },1000);   
    }
}

$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    App.init();
    App.readData();
    InputCarrierSpeed();

});
