export class CircleButtonUI {
    constructor(elementId,outCircleId) {
        this.element = document.getElementById(elementId);
        this.pressed = false;
        this.outCircleId = document.getElementById(outCircleId);

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.element.addEventListener('mousedown', this.handleMouseDown);
        this.element.addEventListener('touchstart', this.handleMouseDown);
        this.element.addEventListener('mouseup', this.handleMouseUp);    
        this.element.addEventListener('touchend', this.handleMouseUp);
        this.element.addEventListener('mouseleave', this.handleMouseLeave);
    }

    handleMouseDown(event) {
        event.preventDefault();
        this.element.classList.add("pressed");
        this.outCircleId.classList.add("pressed");
    }

    handleMouseUp(event) {
        event.preventDefault();
        this.element.classList.remove("pressed");
        this.outCircleId.classList.remove("pressed");
    }

    handleMouseLeave(event) {
        if (this.pressed) {
            this.element.classList.remove("pressed");
            this.outCircleId.classList.remove("pressed");
        }
    }
}