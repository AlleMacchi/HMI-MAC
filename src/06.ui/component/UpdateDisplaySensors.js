import {DataSensorsList} from '../../00.config/data/global/SensorList.js';

export function UpdateDisplaySensors(data){
    const SensorsList = DataSensorsList || [];


    SensorsList.forEach(sensor => {
            const element = document.getElementById(sensor.displayId);

            const value = data[sensor.value];
            if (value) {
                element.classList.add('green');
            }else{
                element.classList.remove('green');
            }
        });
}