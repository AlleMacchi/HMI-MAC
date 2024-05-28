import { GenerateLogicalPositionString } from '../../99.utils/ui/GenerateLogicalPositionString.js';

import config from '../../00.config/config.js';
import {MapActualPosition} from '../js/MapActualPosition.js';

import { Dropdown } from '../js/Dropdown.js';

var direction = 0;
const actualPositionUI = new MapActualPosition('chessboard','actual-position','row', 'col', '');
const actualPositionSection2 = new MapActualPosition('chessboard-section2','actual-position-section2','section2-row', 'section2-col','section2-logical-position',GenerateLogicalPositionString,direction,'section2-logical-position-mm');
const actualPositionSection3 = new MapActualPosition('chessboard-section3','actual-position-section3','section3-row', 'section3-col','section3-logical-position',GenerateLogicalPositionString,direction,'section3-logical-position-mm');
var dropdown = new Dropdown("dropdown-toggle_Section3", "dropdown-menu_Section3", actualPositionSection2);
// to Update drop down in Positions
var dropdown2 = new Dropdown("dropdown-toggle_Section_Position", "dropdown-menu_Section_Position", actualPositionSection3);
// to Update drop down in WMS
var dropdown3 = new Dropdown("dropdown-toggle_Section5", "dropdown-menu_Section5", actualPositionSection2);

export function UpdateDisplayData(data){
    const currentPosition = document.getElementById('current-position');
    const actualPositionMMSection3 = document.getElementById('actual-position-mm-section3');
    const currentLogicalPosition = document.getElementById('current-logical-position');
    const currentStatus = document.getElementById('status-positioning');

    const Row = data.StatusCarrierActPositon_logicalRow;
    const Col = data.StatusCarrierActPositon_logicalCol;
    const Dir = data.StatusCarrierActPositon_logicalDir;

    currentPosition.innerHTML = data.CarrierActPosition_mm + ' mm';
    actualPositionMMSection3.innerHTML = data.CarrierActPosition_mm + ' mm';
    if (Row !=0 && Col !=0 ) {
        currentLogicalPosition.innerHTML =  GenerateLogicalPositionString(Row,Col,Dir);
    } else {
        currentLogicalPosition.innerHTML =  'Unknown';
    }

    if (config.isMotherShuttle) {
        actualPositionUI.update(Row ,Col,Row , Col, data.ShuttleOnBoardTheMother);  
        actualPositionSection2.update(Row ,Col,Row , Col, data.ShuttleOnBoardTheMother);
        actualPositionSection3.update(Row ,Col,Row , Col, data.ShuttleOnBoardTheMother);
    } else {
        actualPositionUI.update(Row ,Col,Row , config.MotherPositionColumn, data.ShuttleOnBoardTheMother);  
        actualPositionSection2.update(Row ,Col,Row , config.MotherPositionColumn, data.ShuttleOnBoardTheMother);
        actualPositionSection3.update(Row ,Col,Row , config.MotherPositionColumn, data.ShuttleOnBoardTheMother);
    }
    

   if (data.CarrierInPosition) {currentStatus.innerHTML = 'In Position';} 
   else if (data.CarrierIsMoving){currentStatus.innerHTML = 'Is Moving';}
   else if (data.CarrierIsFault){currentStatus.innerHTML = 'Is Fault';}
   else {currentStatus.innerHTML = 'Unknown';}
  
}

export { actualPositionUI, actualPositionSection2,actualPositionSection3, dropdown, dropdown2, dropdown3};