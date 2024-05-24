export class CircleButtonUIByClass {
    constructor(elementClass,outCircleClass,elementN) {
        this.element = document.getElementsByClassName(elementClass)[elementN];
        this.outCircleId = document.getElementsByClassName(outCircleClass)[elementN];
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