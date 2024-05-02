export function ShowPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');

    popupMessage.innerHTML = message;
    popup.style.display = 'block';

};