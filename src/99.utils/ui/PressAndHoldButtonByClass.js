import { UpdateBooleanValueUseCase } from '../../02.usecases/entities/UpdateBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';

export class PressAndHoldButtonByClass {
    constructor(id,elementClass,elementN, entity, elementUI, validateFn = () => true,timeToHold = 0) {
        this.element = document.getElementsByClassName(elementClass)[elementN];
        this.elementUI = elementUI;
        this.pressed = false;
        this.id = id;
        this.entity = entity;
        this.validateFn = validateFn;
        this.timeToHold = timeToHold;
        this.intervalId = null; // Add this line to store the interval ID
        this.bit = false; // Add this line to store the bit state

        const repository = new UpdateValueRepository(plcCommunicationManager);
        this.usecase = new UpdateBooleanValueUseCase(repository, this.entity);

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
        this.toggleBit();
        this.intervalId = setInterval(this.toggleBit.bind(this), 1000);
    }

    handleMouseUp(event) {
        event.preventDefault();
        this.setValue(false);
        this.elementUI.showUnpressed();
        clearInterval(this.intervalId);
    }

    handleMouseLeave(event) {
        if (this.pressed) {
            this.setValue(false);
            this.elementUI.showUnpressed();
            clearInterval(this.intervalId);
        }
    }

    setValue(value) {
        try {
            setTimeout(() => {
                this.usecase.update(this.id, value);
                this.pressed = value;
            }, this.timeToHold);
        } catch (error) {
            console.error('Error setting:', error);
        }
    }

    toggleBit() {
        this.bit = !this.bit;
        try {
            this.usecase.update(37, this.bit);
        } catch (error) {
            console.error('Error updating bit state:', error);
        }
    }
    
}