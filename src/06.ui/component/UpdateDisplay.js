import { plcCommunicationManager } from "../../02.usecases/communication/PLCcommunication.js";
import { GetValuesUseCase } from '../../02.usecases/ui/GetValuesUseCase.js';

export async function UpdateDisplay() {
    const GetValues = new GetValuesUseCase(plcCommunicationManager);
    try {
        // Wait for the findAll method to resolve and then stringify the result
        const data = await GetValues.findAll();
        
        // Assuming data is an object with property 'ActualStep'
        document.getElementById('act-step').innerText = data.ActualStep;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error updating display:', error);
    }
}