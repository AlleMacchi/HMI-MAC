import { GenerateLogicalPositionString } from '../../99.utils/ui/GenerateLogicalPositionString.js';

export function UpdateDisplayData(data){
    const currentPosition = document.getElementById('current-position');
    const currentLogicalPosition = document.getElementById('current-logical-position');
    const currentStatus = document.getElementById('status-positioning');

    const Row = data.StatusCarrierActPositon_logicalRow;
    const Col = data.StatusCarrierActPositon_logicalCol;
    const Dir = data.StatusCarrierActPositon_logicalDir;

    currentPosition.innerHTML = data.CarrierActPosition_mm + ' mm';
    if (Row !=0 && Col !=0 ) {
        currentLogicalPosition.innerHTML =  GenerateLogicalPositionString(Row,Col,Dir);
    } else {
        currentLogicalPosition.innerHTML =  'Unknown';
    }
    

   if (data.CarrierInPosition) {currentStatus.innerHTML = 'In Position';} 
   else if (data.CarrierIsMoving){currentStatus.innerHTML = 'Is Moving';}
   else if (data.CarrierIsFault){currentStatus.innerHTML = 'Is Fault';}
   else {currentStatus.innerHTML = 'Unknown';}
}