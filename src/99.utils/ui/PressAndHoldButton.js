import { UpdateBooleanValueUseCase } from '../../02.usecases/entities/UpdateBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';

export class PressAndHoldButton {
    constructor(id,elementId,entity) {
        this.element = document.getElementById(elementId);
        this.pressed = false;
        this.id = id;
        this.entity = entity;

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
        this.setValue(true);
    }

    handleMouseUp(event) {
        event.preventDefault();
        this.setValue(false);
    }

    handleMouseLeave(event) {
        if (this.pressed) {
            this.setValue(false);
        }
    }

    setValue(value) {
        try {
            this.usecase.update(this.id, value);
            this.pressed = value;
        } catch (error) {
            console.error('Error setting:', error);
        }
    }
}