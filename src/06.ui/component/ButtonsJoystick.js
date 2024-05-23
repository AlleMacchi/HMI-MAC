import { ButtonJoystickUp } from "./ButtonJoystickUp.js";
import { ButtonJoystickDown } from "./ButtonJoystickDown.js";
import { ButtonJoystickLeft } from "./ButtonJoystickLeft.js";
import { ButtonJoystickRight } from "./ButtonJoystickRight.js";
import { ButtonJoystickCenter } from "./ButtonJoystickCenter.js";


export function ButtonsJoystick(elementN) {
    ButtonJoystickCenter(elementN);
    ButtonJoystickUp(elementN);
    ButtonJoystickDown(elementN);
    ButtonJoystickLeft(elementN);
    ButtonJoystickRight(elementN);
}