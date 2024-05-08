export class NormalButtonUI {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    showPressed() {
        this.element.classList.add("pressed");
    }

    showUnpressed() {
        this.element.classList.remove("pressed");
    }


}