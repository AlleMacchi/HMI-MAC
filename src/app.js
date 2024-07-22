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
import { configureAccess } from "./06.ui/js/ConfigureAccess.js";
import { ButtonsPages } from "./06.ui/component/ButtonsPages.js";
import { LoginButton } from "./06.ui/component/ButtonLogin.js";
import { ButtonClosePopup } from "./06.ui/component/ButtonClosePopup.js";
import { ButtonWMSConfirm } from "./06.ui/component/ButtonWMSConfirm.js";
import { ButtonsCommand } from "./06.ui/component/ButtonsCommand.js";
import { ButtonsJoystick } from "./06.ui/component/ButtonsJoystick.js";
import { ButtonReadPositionMM } from "./06.ui/component/ButtonReadPositionMM.js";
import { ButtonCopyActPosition } from "./06.ui/component/ButtonCopyActPosition.js";
import { ButtonSetPhysicalPositionConfirm } from "./06.ui/component/ButtonSetPhysicalPositionConfirm.js";
import { ButtonMultiPosConfirm } from "./06.ui/component/ButtonMultiPosConfirm.js";
import { InitMotherBabyUI } from "./06.ui/js/InitMotherBabyUI.js";
import { ButtonConfirmMinBattery } from "./06.ui/component/ButtonConfirmMinBattery.js";
import { ButtonConfirmMaxBattery } from "./06.ui/component/ButtonConfirmMaxBattery.js";
import { ButtonSelectionBypassOn } from "./06.ui/component/ButtonSelectionBypassOn.js";
import { ButtonSelectionBypassOff } from "./06.ui/component/ButtonSelectionBypassOff.js";
import { ButtonSelectionAutomatic } from "./06.ui/component/ButtonSelectionAutomatic.js";
import { ButtonSelectionManual } from "./06.ui/component/ButtonSelectionManual.js";

const App = {
  init: function () {
    plcCommunicationManager.init();
    InitButtonsPages();
    InitMotherBabyUI()
  },
  readData: function () {
    setInterval(async function () {
      UpdateDisplay();
    }, 1000);
  },
  components: function () {
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
    ButtonReadPositionMM();
    ButtonCopyActPosition();
    ButtonMultiPosConfirm();
    ButtonSetPhysicalPositionConfirm();
    ButtonsPages();
    LoginButton();
    ButtonClosePopup();
    configureAccess("");
    ButtonConfirmMinBattery();
    ButtonConfirmMaxBattery();
    ButtonWMSConfirm();
    ButtonSelectionBypassOn(0);
    ButtonSelectionBypassOn(1);
    ButtonSelectionBypassOff(0);
    ButtonSelectionBypassOff(1);
    ButtonSelectionAutomatic();
    ButtonSelectionManual();
  },
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
  App.readData();
  App.components();
});
