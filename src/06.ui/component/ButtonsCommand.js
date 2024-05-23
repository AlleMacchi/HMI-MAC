import { StartButton } from "./ButtonStart.js";
import { StopButton } from "./ButtonStop.js";
import { ResetButton } from "./ButtonReset.js";

export function ButtonsCommand(elementN) {
    StartButton(elementN);
    StopButton(elementN);
    ResetButton(elementN);
}