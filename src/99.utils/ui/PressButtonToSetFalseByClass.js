import { UpdateBooleanValueUseCase } from '../../02.usecases/entities/UpdateBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';

export class PressButtonToSetFalseByClass {
    constructor(id,elementClass,elementN,entity, callback, firstButtonClass, secondButtonClass) {
        if (typeof callback === 'function') {
            this.callback = callback;
        }
        else{
            this.callback = () => {};
        }
        this.element = document.getElementsByClassName(elementClass)[elementN];
        this.id = id;
        this.entity = entity;
        this.firstButtonClass = firstButtonClass;
        this.secondButtonClass = secondButtonClass;
        this.elementN = elementN;

        const repository = new UpdateValueRepository(plcCommunicationManager);
        this.usecase = new UpdateBooleanValueUseCase(repository, this.entity);

        this.handleMouseDown = this.handleMouseDown.bind(this);

        this.element.addEventListener('mousedown', this.handleMouseDown);
        this.element.addEventListener('touchstart', this.handleMouseDown);
    }

    handleMouseDown(event) {
        event.preventDefault();
        this.setValue(false);
    }

    setValue(value) {
        try {
            this.usecase.update(this.id, value);
            this.pressed = value;
            this.callback(this.firstButtonClass,this.secondButtonClass,this.elementN);
        } catch (error) {
            console.error('Error setting:', error);
        }
    }
}