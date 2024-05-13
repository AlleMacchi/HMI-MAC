export function TwoButtonPressedToggle(firstButtonId, secondButtonId){
    const element1 = document.getElementById(firstButtonId);
    const element2 = document.getElementById(secondButtonId);

    element1.classList.add('pressed');
    element2.classList.remove('pressed');   
}