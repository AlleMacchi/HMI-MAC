
export function UpdateDisplayModeMachine(StatusMode){
    if (StatusMode) {
        document.getElementById('Mode').innerText = 'Automatic'
    } else {
        document.getElementById('Mode').innerText = 'Manual'
    }
}
