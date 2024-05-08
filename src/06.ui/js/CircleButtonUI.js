export class CircleButtonUI {
    constructor(elementId,outCircleId) {
        this.element = document.getElementById(elementId);
        this.outCircleId = document.getElementById(outCircleId);
    }

    showPressed() {
        this.element.classList.add("pressed");
        this.outCircleId.classList.add("pressed");
    }

    showUnpressed() {
        this.element.classList.remove("pressed");
        this.outCircleId.classList.remove("pressed");
    }

}