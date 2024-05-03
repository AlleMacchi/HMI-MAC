import { plcCommunicationManager } from "../../02.usecases/communication/PLCcommunication.js";
import { GetInitValuesUseCase } from '../../02.usecases/ui/GetInitValuesUseCase.js';

export async function InitDisplayUpdate() {
    const GetValues = new GetInitValuesUseCase(plcCommunicationManager);
    try {
        // Wait for the findAll method to resolve and then stringify the result
        const data = await plcCommunicationManager.init();
        console.log(data);
        // Assuming data is an object with property 'ActualStep'
      //  document.getElementById('act-speed').innerText = data.PLC_CarrierSpeed;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error updating display:', error);
    }
}