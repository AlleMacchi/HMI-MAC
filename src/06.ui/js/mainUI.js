import {ScrollIntoPages} from './ScrollIntoPages.js' 
import {ButtonClosePopup} from './ButtonClosePopup.js' 
import {LoginButtonUI} from './LoginButtonUI.js' 
import {AlarmsButtonUI} from './AlarmsButtonUI.js' 
import { CircleButtonUI } from './CircleButtonUI.js'
import { NormalButtonUI } from './NormalButtonUI.js'
import { DropupMenu } from './DropupMenu.js'

ScrollIntoPages();
ButtonClosePopup();
AlarmsButtonUI();
LoginButtonUI();

const StartButtonUI = new CircleButtonUI('buttonStart', 'btn_circle_out_START');
const StopButtonUI = new CircleButtonUI('buttonStop', 'btn_circle_out_STOP');
const ResetButtonUI = new NormalButtonUI('buttonReset');
const SelectionSteps = new DropupMenu('buttonSelectionSteps','SelectionSteps');
