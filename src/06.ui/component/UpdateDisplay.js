import { plcCommunicationManager } from "../../02.usecases/communication/PLCcommunication.js";
import { GetValuesUseCase } from '../../02.usecases/ui/GetValuesUseCase.js';

import { UpdateDisplayStatusMachine} from './UpdateDisplayStatusMachine.js';
import { UpdateDisplayModeMachine} from './UpdateDisplayModeMachine.js';
import { UpdateDisplaySteps} from './UpdateDisplaySteps.js';
import { UpdateDisplayCurrentCarrierSpeed } from './UpdateDisplayCurrentCarrierSpeed.js';
import { UpdateDisplayBatteryLevel } from './UpdateDisplayBatteryLevel.js';
import { UpdateDisplaySensors } from './UpdateDisplaySensors.js';
import { UpdateDisplayShuttleLateral } from './UpdateDisplayShuttleLateral.js';
import { UpdateDisplayMovements } from './UpdateDisplayMovements.js';
import { UpdateDisplayData } from './UpdateDisplayData.js';
import { UpdateAlarms } from './UpdateAlarms.js';
import { updateWMS } from "./UpdateWMS.js";
import { UpdateDisplayWatchdog } from "./UpdateDisplayWatchdog.js";

export async function UpdateDisplay() {
    const GetValues = new GetValuesUseCase(plcCommunicationManager);
    try {
        // Wait for the findAll method to resolve and then stringify the result
        const data = await GetValues.findAll();
        UpdateDisplayModeMachine(data.StatusMode);
        UpdateDisplayStatusMachine(data.StatusMachine);        
        UpdateDisplaySteps(data.TaskNumber,data.ActualStep );
        const maxCarrierSpeed = 2000;
        UpdateDisplayCurrentCarrierSpeed(data.CarrierActSpeed,'mm/s','Carrier Speed', maxCarrierSpeed);
        UpdateDisplayBatteryLevel(10, data.BatteryLevel);
        UpdateDisplaySensors(data);
        UpdateDisplayShuttleLateral(data.LifterInPositionUp);
        UpdateDisplayMovements(data);
        UpdateDisplayData(data);
        UpdateAlarms(data);
        updateWMS(data);
     //   UpdateDisplayWatchdog();

    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error updating display:', error);
    }
}