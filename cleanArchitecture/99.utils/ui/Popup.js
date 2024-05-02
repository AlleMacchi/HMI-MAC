class Popup {
    constructor() {
        this.popup = document.getElementById('popup');
        this.popupMessage = document.getElementById('popupMessage');
    }

    show(message) {
        this.popupMessage.innerHTML = message;
        this.popup.style.display = 'block';
    }

    close() {
        this.popup.style.display = 'none';
    }
}
  
export { Popup };