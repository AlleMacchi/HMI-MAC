import { GenerateLogicalPositionString } from '../../99.utils/ui/GenerateLogicalPositionString.js';

import config from '../../00.config/config.js';
import {MapActualPosition} from '../js/MapActualPosition.js';

import { Dropdown } from '../js/Dropdown.js';

var direction = 0;
const actualPositionUI = new MapActualPosition('chessboard','actual-position','row', 'col', '');
const actualPositionSection2 = new MapActualPosition('chessboard-section2','actual-position-section2','section2-row', 'section2-col','section2-logical-position',GenerateLogicalPositionString,direction,'section2-logical-position-mm');
var dropdown = new Dropdown("dropdown-toggle_Section3", "dropdown-menu_Section3", actualPositionSection2);
// to Update drop down in WMS
var dropdown = new Dropdown("dropdown-toggle_Section5", "dropdown-menu_Section5", actualPositionSection2);

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

    if (config.isMotherShuttle) {
        actualPositionUI.update(Row ,Col,Row , Col);  
        actualPositionSection2.update(Row ,Col,Row , Col);
    } else {
        actualPositionUI.update(Row ,Col,Row , config.MotherPositionColumn);  
        actualPositionSection2.update(Row ,Col,Row , config.MotherPositionColumn); 
    }
    

   if (data.CarrierInPosition) {currentStatus.innerHTML = 'In Position';} 
   else if (data.CarrierIsMoving){currentStatus.innerHTML = 'Is Moving';}
   else if (data.CarrierIsFault){currentStatus.innerHTML = 'Is Fault';}
   else {currentStatus.innerHTML = 'Unknown';}
  
}

export { actualPositionUI, actualPositionSection2, dropdown };