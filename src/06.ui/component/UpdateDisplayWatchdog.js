import { Watchdog } from '../../01.entities/watchdog/Watchdog.js';
import { UpdateBooleanValueUseCase } from '../../02.usecases/entities/UpdateBooleanValueUseCase.js';
import { UpdateValueRepository } from '../../03.repositories/entities/UpdateValueRepository.js';
import { plcCommunicationManager } from '../../02.usecases/communication/PLCcommunication.js';

export function UpdateDisplayWatchdog(){
    const id = 37; // Id use for config DataWriteList.js
    const entity = new Watchdog();
    const repository = new UpdateValueRepository(plcCommunicationManager);
    const usecase = new UpdateBooleanValueUseCase(repository, entity);

    try {
        usecase.update(id, true);
    } catch (error) {
        console.error('Error setting:', error);
    }

}