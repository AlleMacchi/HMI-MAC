import {DataSensorsList} from '../../00.config/data/global/SensorList.js';

export function UpdateSensors(data){
    const SensorsList = DataSensorsList || [];


    SensorsList.forEach(sensor => {
            const element = document.getElementById(sensor.displayId);

            const value = data.Array_2[sensor.value];
            if (value) {
                element.classList.add('green');
            }else{
                element.classList.remove('green');
            }
        });
}