export function TwoButtonPressedToggle(firstButtonId, secondButtonId){
    const element1 = document.getElementById(firstButtonId);
    const element2 = document.getElementById(secondButtonId);

    element1.classList.add('pressed');
    element2.classList.remove('pressed');   
}


export function TwoButtonPressedToggleByClass(firstButtonClass, secondButtonClass, elementN){
    const element1 = document.getElementsByClassName(firstButtonClass)[elementN];
    const element2 = document.getElementsByClassName(secondButtonClass)[elementN];

    element1.classList.add('pressed');
    element2.classList.remove('pressed');   
}


export function TwoButtonPressedToggleByClassWithDisable(firstButtonClass, secondButtonClass, elementN){
    // const element1 = document.getElementsByClassName(firstButtonClass)[elementN];
    // const element2 = document.getElementsByClassName(secondButtonClass)[elementN];
    const element1 = document.getElementsByClassName(firstButtonClass)[0];
    const element2 = document.getElementsByClassName(secondButtonClass)[0];
    const element1a = document.getElementsByClassName(firstButtonClass)[1];
    const element2a = document.getElementsByClassName(secondButtonClass)[1];
    const element1Div = element1.parentNode; // Get the parent node
    const element2Div = element2.parentNode; // Get the parent node
    const element1aDiv = element1a.parentNode; // Get the parent node
    const element2aDiv = element2a.parentNode; // Get the parent node

    console.log(element1Div);

    // Add 'pressed' to element1 and remove 'pressed' from element2
    element1.classList.add('pressed');
    element2.classList.remove('pressed');
    element1a.classList.add('pressed');
    element2a.classList.remove('pressed');
    // Disable all sibling elements except element1 and element2
    disableOtherChildren(element1Div,element2Div, element1, element2);
    disableOtherChildren(element1aDiv,element2aDiv, element1a, element2a);
  
    
    
}


function disableOtherChildren(parentDiv1 ,parentDiv2, element1, element2) {
    Array.from(parentDiv1.children).forEach((child) => {
        if (child !== element1) {
            child.disabled = false;
            child.style.opacity = 1;
            child.style.pointerEvents = "auto";
            child.style.cursor = "auto";
        }
    });

    Array.from(parentDiv2.children).forEach((child) => {
        if (child !== element2) {
            child.disabled = true;
            child.style.opacity = 0.3;
            child.style.pointerEvents = "none";
            child.style.cursor = "not-allowed";
        }
    }
    );

}
