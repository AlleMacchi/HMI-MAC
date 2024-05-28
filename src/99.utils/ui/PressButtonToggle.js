import { UpdateBooleanValueUseCase } from '../../02.usecases/entities/UpdateBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';


export class PressButtonToggle{
    constructor(id, elementId, entity) {
        this.element = document.getElementById(elementId);
        this.id = id;
        this.entity = entity;
        this.pressed = false;  // Initialize the button state

        const repository = new UpdateValueRepository(plcCommunicationManager);
        this.usecase = new UpdateBooleanValueUseCase(repository, this.entity);

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.element.addEventListener('mousedown', this.handleMouseDown);
        this.element.addEventListener('touchstart', this.handleMouseDown);
    }

    handleMouseDown(event) {
        event.preventDefault();
        this.toggleValue();
    }

    toggleValue() {
        const newValue = !this.pressed;  // Toggle the current state
        this.setValue(newValue);
        this.updateButtonState();
    }

    setValue(value) {
        try {
            this.usecase.update(this.id, value);
            this.pressed = value;  // Update the internal state
        } catch (error) {
            console.error('Error setting value:', error);
        }
    }

    updateButtonState() {
        if (this.pressed) {
            this.element.classList.add('pressed');
        } else {
            this.element.classList.remove('pressed');
        }
    }
}