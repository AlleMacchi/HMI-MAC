
import config from '../../00.config/config.js';
import { Alarm } from "../../01.entities/alarm/Alarm.js";

const tableBody = document.querySelector("#alarmTable tbody");
const alarmsBadge =  document.getElementById("alarms-badge");
var activeAlarmsAndWarnings;

export function UpdateAlarms(data){
    

    const alarmsBaby = [
        new Alarm("Alarm_Controller_000", "Alarm", "Alarm_Controller_000 Description", data.Alarm_Controller_000),
        new Alarm("Alarm_Controller_001", "Alarm", "Alarm_Controller_001 Description", data.Alarm_Controller_001),
        new Alarm("Alarm_Controller_002", "Alarm", "Alarm_Controller_002 Description", data.Alarm_Controller_002),
        new Alarm("Alarm_Controller_003", "Alarm", "Alarm_Controller_003 Description", data.Alarm_Controller_003),
        new Alarm("Alarm_Controller_004", "Alarm", "Alarm_Controller_004 Description", data.Alarm_Controller_004),
        new Alarm("Alarm_Controller_005", "Alarm", "Alarm_Controller_005 Description", data.Alarm_Controller_005),
        new Alarm("Alarm_Controller_006", "Alarm", "Alarm_Controller_006 Description", data.Alarm_Controller_006),
        new Alarm("Alarm_Controller_007", "Alarm", "Alarm_Controller_007 Description", data.Alarm_Controller_007),
        new Alarm("Alarm_Controller_008", "Alarm", "Alarm_Controller_008 Description", data.Alarm_Controller_008),
        new Alarm("Alarm_Controller_009", "Alarm", "Alarm_Controller_009 Description", data.Alarm_Controller_009),
        new Alarm("Alarm_Controller_010", "Alarm", "Alarm_Controller_010 Description", data.Alarm_Controller_010),
        new Alarm("Alarm_Controller_011", "Alarm", "Alarm_Controller_011 Description", data.Alarm_Controller_011),
        new Alarm("Alarm_Controller_012", "Alarm", "Alarm_Controller_012 Description", data.Alarm_Controller_012),
        new Alarm("Alarm_Controller_013", "Alarm", "Alarm_Controller_013 Description", data.Alarm_Controller_013),
        new Alarm("Alarm_Controller_014", "Alarm", "Alarm_Controller_014 Description", data.Alarm_Controller_014),
        new Alarm("Alarm_Controller_015", "Alarm", "Alarm_Controller_015 Description", data.Alarm_Controller_015),
    ];


    const alarmsMother = [
        // new Alarm(200, "Alarm", "Emergency Signal", readBits(Array_40)[0]),
        // new Alarm(201, "Alarm", "Pallet Limit Left Engaged", readBits(Array_40)[1]),
        // new Alarm(202, "Alarm", "Pallet Limit Right Engaged", readBits(Array_40)[2]),
        // new Alarm(203, "Alarm", "Satellite Limit Left Engaged", readBits(Array_40)[3]),
        // new Alarm(204, "Alarm", "Satellite Limit Right Engaged", readBits(Array_40)[4]),
        // new Alarm(205, "Alarm", "Drive in fault", readBits(Array_42)[0]),
        // new Alarm(206, "Alarm", "Position sensor in fault", readBits(Array_42)[1]),
        // new Alarm(207, "Alarm", "Out of Tolerance Position", readBits(Array_42)[2]),
        // new Alarm(208, "Alarm", "Timeout positioning", readBits(Array_42)[3]),
        // new Alarm(209, "Alarm", "Limit Switch Forward", readBits(Array_42)[4]),
        // new Alarm(210, "Alarm", "Limit Switch Backward", readBits(Array_42)[5]),
        // new Alarm(211, "Warning", "Selection Maintenance WiFi Controller activated", readBits(Array_41)[1]),
        // // Add additional alarms and warnings as needed.
    ];
    

if(config.isMotherShuttle){
    activeAlarmsAndWarnings = alarmsMother.filter(
        (item) => item.active
      );
}else{
    activeAlarmsAndWarnings = alarmsBaby.filter(
        (item) => item.active
      );
}

console.log(activeAlarmsAndWarnings);

if(tableBody){
    tableBody.innerHTML = "";
}

if (activeAlarmsAndWarnings.length > 0) {
    alarmsBadge.style.display = "block";
    alarmsBadge.textContent = activeAlarmsAndWarnings.length;

    // Change color to yellow if there are no alarms and only warnings are active
    if (!activeAlarmsAndWarnings.some((item) => item.type === "Alarm")) {
        alarmsBadge.style.backgroundColor = "#FFCC00";
        alarmsBadge.style.color = "black";
    }

}else{
    alarmsBadge.style.display = "none";
}



    activeAlarmsAndWarnings.forEach((item) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = item.id;
        const typeCell = document.createElement("td");
        typeCell.textContent = item.type;
        const descCell = document.createElement("td");
        descCell.textContent = item.description;
    
        row.appendChild(idCell);
        row.appendChild(typeCell);
        row.appendChild(descCell);
        tableBody.appendChild(row);
      });
    
}

// for testing
// UpdateAlarms();