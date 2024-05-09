import { plcCommunicationManager } from "../../02.usecases/communication/PLCcommunication.js";
import { GetValuesUseCase } from '../../02.usecases/ui/GetValuesUseCase.js';

import { stepsObject } from '../../00.config/data/global/Steps.js';
import { tasksObject } from '../../00.config/data/global/Tasks.js';

export async function UpdateDisplay() {
    const GetValues = new GetValuesUseCase(plcCommunicationManager);
    try {
        // Wait for the findAll method to resolve and then stringify the result
        const data = await GetValues.findAll();


        // STATUS MODE
        if (data.Array_2.StatusMode) {
            document.getElementById('Mode').innerText = 'Automatic'
        } else {
            document.getElementById('Mode').innerText = 'Manual'
        }
      
        // STEPS MANAGEMENT
        function changeDropdownContent(StepsType) {
            const steps = stepsObject[StepsType] || [];
            const dropdownContent = steps.map((step, index) => `<a href="#" onclick="selectOption('${index}')">${step}</a>`).join("");
            document.getElementById("SelectionSteps").innerHTML = dropdownContent;
        }
        
        function changeTextActualStep(StepsType, ActStep) {
            const steps = stepsObject[StepsType] || [];
            const tasks = tasksObject[StepsType] || [];
        
            if (ActStep >= 100) {
                document.getElementById("current-step").textContent = "Alarms Steps";
            } else {
                const stepsLength = steps.length;
                const stepIndex = (ActStep < stepsLength) ? ActStep : 0;
                document.getElementById("current-step").textContent = steps[stepIndex];
            }
        
            const tasksLength = tasks.length;
            const taskIndex = (StepsType < tasksLength) ? StepsType : 0;
            document.getElementById("current-task").textContent = tasks[taskIndex];
        }

        const StepsType = data.TaskNumber;
        const ActStep = data.ActualStep;
        changeDropdownContent(StepsType);
        changeTextActualStep(StepsType, ActStep)

    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error updating display:', error);
    }
}