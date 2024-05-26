

export class ButtonNoWrite {
    constructor(elementId,entity, elementUI, callback,callbackPar,callbackPar2, validateFn = () => true,timeToHold = 0) {
        if (typeof callback === 'function') {
            this.callback = callback;
        }
        else{
            this.callback = () => {};
        }
        
        this.element = document.getElementById(elementId);
        this.elementUI = elementUI;
        this.pressed = false;
        this.entity = entity;
        this.validateFn = validateFn;
        this.timeToHold = timeToHold;
        this.callbackPar = callbackPar;
        this.callbackPar2 = callbackPar2;

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

        // Validate before proceeding
        if (!this.validateFn()) {
            console.error('Validation failed');
            return;
        }
        
        this.setValue(true);
        this.elementUI.showPressed();
    }

    handleMouseUp(event) {
        event.preventDefault();
        this.setValue(false);
        this.elementUI.showUnpressed();
    }

    handleMouseLeave(event) {
        if (this.pressed) {
            this.setValue(false);
            this.elementUI.showUnpressed();
        }
    }

    setValue(value) {
        try {
            setTimeout(() => {
                this.pressed = value;
                this.callback(this.callbackPar,this.callbackPar2);
            }, this.timeToHold);
        } catch (error) {
            console.error('Error setting:', error);
        }
    }
}