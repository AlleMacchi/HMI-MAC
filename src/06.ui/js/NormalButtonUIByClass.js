export class NormalButtonUIByClass {
    constructor(elementClass,elementN) {
        this.element = document.getElementsByClassName(elementClass)[elementN];
    }

    showPressed() {
        this.element.classList.add("pressed");
    }

    showUnpressed() {
        this.element.classList.remove("pressed");
    }


}