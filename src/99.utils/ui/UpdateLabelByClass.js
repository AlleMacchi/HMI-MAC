export function UpdateLabelByClass(value, displayClass, elementN) {
    const displayElement = document.getElementsByClassName(displayClass)[elementN];
    if (displayElement) {
        displayElement.innerText = value; 
    } else {
        console.error("Element with Class", displayClass, "not found.");
    }
}
