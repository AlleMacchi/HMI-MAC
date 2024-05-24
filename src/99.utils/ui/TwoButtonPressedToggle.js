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