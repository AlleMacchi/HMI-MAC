import config from "../../00.config/config.js";
import { Alarm } from "../../01.entities/alarm/Alarm.js";
import {
  alarmsBabyConfig,
  alarmsMotherConfig,
} from "../../00.config/alarmsConfig.js";

const tableBody = document.querySelector("#alarmTable tbody");
const alarmsBadge = document.getElementById("alarms-badge");
var alarmsConfig;
var activeAlarmsAndWarnings;

export function UpdateAlarms(data) {
  if (config.isMotherShuttle) {
    alarmsConfig = alarmsMotherConfig;
  } else {
    alarmsConfig = alarmsBabyConfig;
  }

  const alarmsMapData = {
    Alarm_Controller_000: data.Alarm_Controller_000,
    Alarm_Controller_001: data.Alarm_Controller_001,
    Alarm_Controller_002: data.Alarm_Controller_002,
    Alarm_Controller_003: data.Alarm_Controller_003,
    Alarm_Controller_004: data.Alarm_Controller_004,
    Alarm_Controller_005: data.Alarm_Controller_005,
    Alarm_Controller_006: data.Alarm_Controller_006,
    Alarm_Controller_007: data.Alarm_Controller_007,
    Alarm_Controller_008: data.Alarm_Controller_008,
    Alarm_Controller_009: data.Alarm_Controller_009,
    Alarm_Controller_010: data.Alarm_Controller_010,
    Alarm_Controller_011: data.Alarm_Controller_011,
    Alarm_Controller_012: data.Alarm_Controller_012,
    Alarm_Controller_013: data.Alarm_Controller_013,
    Alarm_Controller_014: data.Alarm_Controller_014,
    Alarm_Controller_015: data.Alarm_Controller_015,

    Alarm_Controller_100: data.Alarm_Controller_100,
    Alarm_Controller_101: data.Alarm_Controller_101,
    Alarm_Controller_102: data.Alarm_Controller_102,
    Alarm_Controller_103: data.Alarm_Controller_103,
    Alarm_Controller_104: data.Alarm_Controller_104,
    Alarm_Controller_105: data.Alarm_Controller_105,
    Alarm_Controller_106: data.Alarm_Controller_106,
    Alarm_Controller_107: data.Alarm_Controller_107,
    Alarm_Controller_108: data.Alarm_Controller_108,
    Alarm_Controller_109: data.Alarm_Controller_109,
    Alarm_Controller_110: data.Alarm_Controller_110,
    Alarm_Controller_111: data.Alarm_Controller_111,
    Alarm_Controller_112: data.Alarm_Controller_112,
    Alarm_Controller_113: data.Alarm_Controller_113,
    Alarm_Controller_114: data.Alarm_Controller_114,
    Alarm_Controller_115: data.Alarm_Controller_115,

    Alarm_Carrier_000: data.Alarm_Carrier_000,
    Alarm_Carrier_001: data.Alarm_Carrier_001,
    Alarm_Carrier_002: data.Alarm_Carrier_002,
    Alarm_Carrier_003: data.Alarm_Carrier_003,
    Alarm_Carrier_004: data.Alarm_Carrier_004,
    Alarm_Carrier_005: data.Alarm_Carrier_005,
    Alarm_Carrier_006: data.Alarm_Carrier_006,
    Alarm_Carrier_007: data.Alarm_Carrier_007,
    Alarm_Carrier_008: data.Alarm_Carrier_008,
    Alarm_Carrier_009: data.Alarm_Carrier_009,
    Alarm_Carrier_010: data.Alarm_Carrier_010,
    Alarm_Carrier_011: data.Alarm_Carrier_011,
    Alarm_Carrier_012: data.Alarm_Carrier_012,
    Alarm_Carrier_013: data.Alarm_Carrier_013,
    Alarm_Carrier_014: data.Alarm_Carrier_014,
    Alarm_Carrier_015: data.Alarm_Carrier_015,

    Alarm_Lifter_000: data.Alarm_Lifter_000,
    Alarm_Lifter_001: data.Alarm_Lifter_001,
    Alarm_Lifter_002: data.Alarm_Lifter_002,
    Alarm_Lifter_003: data.Alarm_Lifter_003,
    Alarm_Lifter_004: data.Alarm_Lifter_004,
    Alarm_Lifter_005: data.Alarm_Lifter_005,
    Alarm_Lifter_006: data.Alarm_Lifter_006,
    Alarm_Lifter_007: data.Alarm_Lifter_007,
    Alarm_Lifter_008: data.Alarm_Lifter_008,
    Alarm_Lifter_009: data.Alarm_Lifter_009,
    Alarm_Lifter_010: data.Alarm_Lifter_010,
    Alarm_Lifter_011: data.Alarm_Lifter_011,
    Alarm_Lifter_012: data.Alarm_Lifter_012,
    Alarm_Lifter_013: data.Alarm_Lifter_013,
    Alarm_Lifter_014: data.Alarm_Lifter_014,
    Alarm_Lifter_015: data.Alarm_Lifter_015,
  };

  // console.log(alarmsMapData["Alarm_Controller_003"]);

  const alarms = [];
  alarmsConfig.forEach((item) => {
    if (alarmsMapData.hasOwnProperty(item.id)) {
      alarms.push(
        new Alarm(item.id, item.type, item.description, alarmsMapData[item.id])
      );
    }
  });

  activeAlarmsAndWarnings = alarms.filter((item) => item.active);

  // console.log(activeAlarmsAndWarnings);

  if (tableBody) {
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
  } else {
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
