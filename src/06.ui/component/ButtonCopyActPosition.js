import { copyActPosition } from "../../01.entities/copy-act-position-button/copyActPosition.js";
import { ButtonNoWrite } from "../../99.utils/ui/ButtonNoWrite.js";
import { NormalButtonUI } from "../js/NormalButtonUI.js";

export function ButtonCopyActPosition() {
  const actPosition = "actual-position-mm-section3";
  const setPositionInput = "positionInput";
  const elementId = "buttonCopyPosition";
  const entity = new copyActPosition();
  const elementUI = new NormalButtonUI(elementId);

  const button = new ButtonNoWrite(
    elementId,
    entity,
    elementUI,
    CopyActPosition,
    actPosition,
    setPositionInput
  );

  return { button };
}

function CopyActPosition(fromId, toId) {
    const copyFrom = document.getElementById(fromId);
    const copyTo = document.getElementById(toId);

    if (!copyFrom || !copyTo) {
        console.error("Element not found.");
        return; // Stop the function if elements are not found
    }

    // Extracting the number from the 'from' element's textContent
    const number = copyFrom.textContent.trim().replace('mm', '');

    // Log the content to be copied
    console.log("Content to copy:", number);

    // Set the extracted number to the 'to' input field's value
    copyTo.value = parseFloat(number);

    // Log the updated value
    console.log("Updated input value:", copyTo.value);
}
