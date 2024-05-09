import { statusMachineObject} from '../../00.config/data/global/StatusMachine.js';

export function UpdateDisplayStatusMachine(ActStatus){
    const status = statusMachineObject || [];
    const statusIndex = (ActStatus > 0) ? ActStatus : 0;
    document.getElementById("Status").textContent = status[statusIndex];
}