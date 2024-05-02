export function UpdateLabel(value, displayId) {
    const displayElement = document.getElementById(displayId);
    if (displayElement) {
        displayElement.innerText = value; 
    } else {
        console.error("Element with id", displayId, "not found.");
    }
}
