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
import { ButtonLogicalPositionConfirm } from './06.ui/component/ButtonLogicalPositionConfirm.js'
import { ButtonPhysicalPositionConfirm } from './06.ui/component/ButtonPhysicalPositionConfirm.js'
import { ButtonSelectionLogicalPosition } from './06.ui/component/ButtonSelectionLogicalPosition.js'
import { ButtonSelectionPhysicalPosition } from './06.ui/component/ButtonSelectionPhysicalPosition.js'
import { ButtonJoystickUp } from './06.ui/component/ButtonJoystickUp.js'
import { ButtonJoystickDown } from './06.ui/component/ButtonJoystickDown.js'
import { ButtonJoystickLeft } from './06.ui/component/ButtonJoystickLeft.js'
import { ButtonJoystickRight } from './06.ui/component/ButtonJoystickRight.js'
import { ButtonJoystickCenter } from './06.ui/component/ButtonJoystickCenter.js'

import { ButtonsPages} from './06.ui/component/ButtonsPages.js'
import { LoginButton } from './06.ui/component/ButtonLogin.js' 
import { ButtonClosePopup } from './06.ui/component/ButtonClosePopup.js' 
import { LegendButton } from './06.ui/component/ButtonLegend.js'


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
    components: function(data){
         ResetButton();
         StartButton();
         StopButton();
         StepSelection();
         StepConfirmButton();
         ButtonLogicalPositionConfirm();
         ButtonPhysicalPositionConfirm();
         ButtonSelectionLogicalPosition();
         ButtonSelectionPhysicalPosition();
         ButtonJoystickUp();
         ButtonJoystickDown();
         ButtonJoystickLeft();
         ButtonJoystickRight();
         ButtonJoystickCenter();
      
         ButtonsPages();
         LoginButton();
         ButtonClosePopup();
         LegendButton ();
         
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    App.init();
    App.readData();
    App.components();
});