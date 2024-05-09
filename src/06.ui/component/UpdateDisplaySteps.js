import { stepsObject } from '../../00.config/data/global/Steps.js';
import { tasksObject } from '../../00.config/data/global/Tasks.js';

function changeDropdownContent(StepsType) {
    const steps = stepsObject[StepsType] || [];
    const dropdownContent = steps.map((step, index) => `<a href="#" data-option="${index}">${step}</a>`).join(""); 
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


export function UpdateDisplaySteps(StepsType, ActStep){
    changeDropdownContent(StepsType);
    changeTextActualStep(StepsType, ActStep)
}