// Init Section:
import { plcCommunicationManager } from "./02.usecases/communication/PLCcommunication.js";
import { InitButtonsPages } from "./06.ui/js/InitButtonsPages.js";

// Read Data Section:
import { UpdateDisplay } from "./06.ui/component/UpdateDisplay.js";

// Components Section:
import { StepSelection } from "./06.ui/component/DropupStepSelection.js";
import { StepConfirmButton } from "./06.ui/component/ButtonStepConfirm.js";
import { ButtonLogicalPositionConfirm } from "./06.ui/component/ButtonLogicalPositionConfirm.js";
import { ButtonPhysicalPositionConfirm } from "./06.ui/component/ButtonPhysicalPositionConfirm.js";
import { ButtonSelectionLogicalPosition } from "./06.ui/component/ButtonSelectionLogicalPosition.js";
import { ButtonSelectionPhysicalPosition } from "./06.ui/component/ButtonSelectionPhysicalPosition.js";
import { ButtonJoystickUp } from "./06.ui/component/ButtonJoystickUp.js";
import { ButtonJoystickDown } from "./06.ui/component/ButtonJoystickDown.js";
import { ButtonJoystickLeft } from "./06.ui/component/ButtonJoystickLeft.js";
import { ButtonJoystickRight } from "./06.ui/component/ButtonJoystickRight.js";
import { ButtonJoystickCenter } from "./06.ui/component/ButtonJoystickCenter.js";
import { configureAccess } from "./06.ui/js/ConfigureAccess.js";
import { ButtonsPages } from "./06.ui/component/ButtonsPages.js";
import { LoginButton } from "./06.ui/component/ButtonLogin.js";
import { ButtonClosePopup } from "./06.ui/component/ButtonClosePopup.js";
import { LegendButton } from "./06.ui/component/ButtonLegend.js";
import { ButtonWMSConfirm } from "./06.ui/component/ButtonWMSConfirm.js";
import { ButtonsCommand } from "./06.ui/component/ButtonsCommand.js";
import { ButtonsJoystick } from "./06.ui/component/ButtonsJoystick.js";

const App = {
  init: function () {
    plcCommunicationManager.init();
    InitButtonsPages();
  },
  readData: function () {
    setInterval(async function () {
      UpdateDisplay();
    }, 1000);
  },
  components: function (data) {
    ButtonsCommand(0);
    ButtonsCommand(1);
    ButtonsJoystick(0);
    ButtonsJoystick(1);
    StepSelection();
    StepConfirmButton();
    ButtonLogicalPositionConfirm(0);
    ButtonLogicalPositionConfirm(1);
    ButtonPhysicalPositionConfirm(0);
    ButtonPhysicalPositionConfirm(1);
    ButtonSelectionLogicalPosition(0);
    ButtonSelectionLogicalPosition(1);
    ButtonSelectionPhysicalPosition(0);
    ButtonSelectionPhysicalPosition(1);
    
    ButtonsPages();
    LoginButton();
    ButtonClosePopup();
    LegendButton();
    configureAccess("");
    ButtonWMSConfirm();
  },
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
  App.readData();
  App.components();
});
