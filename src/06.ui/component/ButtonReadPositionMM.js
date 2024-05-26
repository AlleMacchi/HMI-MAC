
import { NormalButtonUI } from "../js/NormalButtonUI.js";
import { ReadSavedPosition } from "../../01.entities/read-saved-position/ReadSavedPosition.js";
import { InputFieldNoLabelString } from "../../99.utils/ui/InputFieldNoLabelString.js";

export function ButtonReadPositionMM() {
  const id = 21; // Id use for config DataWriteList.js
  const elementId = "buttonShowPositionMM"; // Id of button
  const elementUI = new NormalButtonUI(elementId);
  const entity = new ReadSavedPosition();
  const inputId = "logicalPosition_section3";
  const idSavedPosition = "positionSavedMM";

  const input = new InputFieldNoLabelString(id, inputId, elementId, entity ,elementUI, idSavedPosition)

  // To-Do separate Request
  // const requestId = 24; // Id use for config DataWriteList.js
  // const button = new PressButtonToSetTrue(requestId,elementId,entity);
  
  return { input};
}


