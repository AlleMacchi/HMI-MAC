// Desc: Configuration of alarms for Baby and Mother Shuttle
// Note: Use the Id provided to add new alarms to the system giving it jsut a type and a description

const alarmsBabyConfig = [
    { id: "Alarm_Controller_000", type: "Alarm", description: "Emergency not Ok" }, //Controller[0].bit0 Alarm: Emergency not Ok
    { id: "Alarm_Controller_001", type: "Alarm", description: "Pallet Presence Lost" }, //Controller[0].bit1 Alarm: Pallet Presence Lost
    { id: "Alarm_Controller_002", type: "", description: "" },
    { id: "Alarm_Controller_003", type: "", description: "" },
    { id: "Alarm_Controller_004", type: "", description: "" },
    { id: "Alarm_Controller_005", type: "", description: "" },
    { id: "Alarm_Controller_006", type: "", description: "" },
    { id: "Alarm_Controller_007", type: "", description: "" },
    { id: "Alarm_Controller_008", type: "", description: "" },
    { id: "Alarm_Controller_009", type: "", description: "" },
    { id: "Alarm_Controller_010", type: "", description: "" },
    { id: "Alarm_Controller_011", type: "", description: "" },
    { id: "Alarm_Controller_012", type: "", description: "" },
    { id: "Alarm_Controller_013", type: "", description: "" },
    { id: "Alarm_Controller_014", type: "", description: "" },
    { id: "Alarm_Controller_015", type: "", description: "" },

    { id: "Alarm_Controller_100", type: "Warning", description: "Communication with WMS lost" }, //Controller[1].bit0 Warning: Communication with WMS lost
    { id: "Alarm_Controller_101", type: "Warning", description: "Communication with Mother Shuttle lost" },
    { id: "Alarm_Controller_102", type: "Warning", description: "Local Control in Manual Mode" },
    { id: "Alarm_Controller_103", type: "", description: "" },
    { id: "Alarm_Controller_104", type: "", description: "" },
    { id: "Alarm_Controller_105", type: "", description: "" },
    { id: "Alarm_Controller_106", type: "", description: "" },
    { id: "Alarm_Controller_107", type: "", description: "" },
    { id: "Alarm_Controller_108", type: "", description: "" },
    { id: "Alarm_Controller_109", type: "", description: "" },
    { id: "Alarm_Controller_110", type: "", description: "" },
    { id: "Alarm_Controller_111", type: "", description: "" },
    { id: "Alarm_Controller_112", type: "", description: "" },
    { id: "Alarm_Controller_113", type: "", description: "" },
    { id: "Alarm_Controller_114", type: "", description: "" },
    { id: "Alarm_Controller_115", type: "", description: "" },

    { id: "Alarm_Carrier_000", type: "Alarm", description: "Drive Fault" }, //Carrier[0].bit0 Alarm: Drive Fault
    { id: "Alarm_Carrier_001", type: "Alarm", description: "Out Of Tolerance" }, //Carrier[0].bit1 Alarm: Out Of Tolerance
    { id: "Alarm_Carrier_002", type: "Alarm", description: "Timeout positioning" }, //Carrier[0].bit2 Alarm: Timeout positioning
    { id: "Alarm_Carrier_003", type: "Alarm", description: "Limit Switch forward" }, //Carrier[0].bit3 Alarm: Limit Switch forward
    { id: "Alarm_Carrier_004", type: "Alarm", description: "Limit Switch backward" }, //Carrier[0].bit4 Alarm: Limit Switch backward
    { id: "Alarm_Carrier_005", type: "Alarm", description: "Encoder Error" }, //Carrier[0].bit5 Alarm: Encoder Error
    { id: "Alarm_Carrier_006", type: "Alarm", description: "Encoder Not Homed" }, //Carrier[0].bit6 Alarm: Encoder Not Homed
    { id: "Alarm_Carrier_007", type: "Alarm", description: "Path not free" }, //Carrier[0].bit7 Alarm: Path not free
    { id: "Alarm_Carrier_008", type: "Alarm", description: "Pallet Not Present" }, //Carrier[0].bit8 Alarm: Pallet Not Present
    { id: "Alarm_Carrier_009", type: "Alarm", description: "Miss Update Hole" }, //Carrier[0].bit9 Alarm: Miss Update Hole
    { id: "Alarm_Carrier_010", type: "Alarm", description: "The shuttle was moved handly" }, //Carrier[0].bit10 Alarm: The shuttle was moved handly
    { id: "Alarm_Carrier_011", type: "", description: "" },
    { id: "Alarm_Carrier_012", type: "", description: "" },
    { id: "Alarm_Carrier_013", type: "", description: "" },
    { id: "Alarm_Carrier_014", type: "", description: "" },
    { id: "Alarm_Carrier_015", type: "", description: "" },

    { id: "Alarm_Lifter_000", type: "Alarm", description: "Drive Fault" }, //Lifter[0].bit0 Alarm: Drive Fault
    { id: "Alarm_Lifter_001", type: "Alarm", description: "Timeout Positioning" }, //Lifter[0].bit1 Alarm: Timeout Positioning
    { id: "Alarm_Lifter_002", type: "Alarm", description: "Lifter location unknown" }, //Lifter[0].bit2 Alarm: Lifter location unknown
    { id: "Alarm_Lifter_003", type: "", description: "" },
    { id: "Alarm_Lifter_004", type: "", description: "" },
    { id: "Alarm_Lifter_005", type: "", description: "" },
    { id: "Alarm_Lifter_006", type: "", description: "" },
    { id: "Alarm_Lifter_007", type: "", description: "" },
    { id: "Alarm_Lifter_008", type: "", description: "" },
    { id: "Alarm_Lifter_009", type: "", description: "" },
    { id: "Alarm_Lifter_010", type: "", description: "" },
    { id: "Alarm_Lifter_011", type: "", description: "" },
    { id: "Alarm_Lifter_012", type: "", description: "" },
    { id: "Alarm_Lifter_013", type: "", description: "" },
    { id: "Alarm_Lifter_014", type: "", description: "" },
    { id: "Alarm_Lifter_015", type: "", description: "" }
];

const alarmsMotherConfig = [
    { id: "Alarm_Controller_000", type: "Alarm", description: "Emergency not Ok" }, // Controller[0].bit0 Alarm: Emergency not Ok
    { id: "Alarm_Controller_001", type: "Alarm", description: "Pallet Limit Left Engaged" }, // Controller[0].bit1 Alarm: Pallet Limit Left Engaged
    { id: "Alarm_Controller_002", type: "Alarm", description: "Pallet Limit Right Engaged" },  // Controller[0].bit2 Alarm: Pallet Limit Right Engaged
    { id: "Alarm_Controller_003", type: "Alarm", description: "Satellite Limit Left Engaged" }, // Controller[0].bit3 Alarm: Satellite Limit Left Engaged
    { id: "Alarm_Controller_004", type: "Alarm", description: "Satellite Limit Right Engaged" },  // Controller[0].bit4 Alarm: Satellite Limit Right Engaged
    { id: "Alarm_Controller_005", type: "", description: "" },
    { id: "Alarm_Controller_006", type: "", description: "" },
    { id: "Alarm_Controller_007", type: "", description: "" },
    { id: "Alarm_Controller_008", type: "", description: "" },
    { id: "Alarm_Controller_009", type: "", description: "" },
    { id: "Alarm_Controller_010", type: "", description: "" },
    { id: "Alarm_Controller_011", type: "", description: "" },
    { id: "Alarm_Controller_012", type: "", description: "" },
    { id: "Alarm_Controller_013", type: "", description: "" },
    { id: "Alarm_Controller_014", type: "", description: "" },
    { id: "Alarm_Controller_015", type: "", description: "" },

    { id: "Alarm_Controller_100", type: "Warning", description: "Selection Maintenance WiFi Controller activated" }, // Controller[1].bit0 Warning: Selection Maintenance WiFi Controller activated
    { id: "Alarm_Controller_101", type: "Warning", description: "Communication with WMS lost" }, // Controller[1].bit1 Warning: Communication with WMS lost
    { id: "Alarm_Controller_102", type: "Warning", description: "Communication with Baby Shuttle lost" }, // Controller[1].bit2 Warning: Communication with Baby Shuttle lost
    { id: "Alarm_Controller_103", type: "Warning", description: "Local Control in Manual Mode" },
    { id: "Alarm_Controller_104", type: "", description: "" },
    { id: "Alarm_Controller_105", type: "", description: "" },
    { id: "Alarm_Controller_106", type: "", description: "" },
    { id: "Alarm_Controller_107", type: "", description: "" },
    { id: "Alarm_Controller_108", type: "", description: "" },
    { id: "Alarm_Controller_109", type: "", description: "" },
    { id: "Alarm_Controller_110", type: "", description: "" },
    { id: "Alarm_Controller_111", type: "", description: "" },
    { id: "Alarm_Controller_112", type: "", description: "" },
    { id: "Alarm_Controller_113", type: "", description: "" },
    { id: "Alarm_Controller_114", type: "", description: "" },
    { id: "Alarm_Controller_115", type: "", description: "" },

    { id: "Alarm_Carrier_000", type: "Alarm", description: "Drive Fault" }, // Carrier[0].bit0 Alarm: Drive Fault
    { id: "Alarm_Carrier_001", type: "Alarm", description: "Position sensor in fault" }, // Carrier[0].bit1 Alarm: Position sensor in fault
    { id: "Alarm_Carrier_002", type: "Alarm", description: "Out of Tolerance Position" }, // Carrier[0].bit2 Alarm: Out of Tolerance Position
    { id: "Alarm_Carrier_003", type: "Alarm", description: "Timeout positioning" }, // Carrier[0].bit3 Alarm: Timeout positioning
    { id: "Alarm_Carrier_004", type: "Alarm", description: "Limit Switch Forward" }, // Carrier[0].bit4 Alarm: Limit Switch Forward
    { id: "Alarm_Carrier_005", type: "Alarm", description: "Limit Switch Backward" }, // Carrier[0].bit5 Alarm: Limit Switch Backward
    { id: "Alarm_Carrier_006", type: "", description: "" },
    { id: "Alarm_Carrier_007", type: "", description: "" },
    { id: "Alarm_Carrier_008", type: "", description: "" },
    { id: "Alarm_Carrier_009", type: "", description: "" },
    { id: "Alarm_Carrier_010", type: "", description: "" },
    { id: "Alarm_Carrier_011", type: "", description: "" },
    { id: "Alarm_Carrier_012", type: "", description: "" },
    { id: "Alarm_Carrier_013", type: "", description: "" },
    { id: "Alarm_Carrier_014", type: "", description: "" },
    { id: "Alarm_Carrier_015", type: "", description: "" }

];





export { alarmsBabyConfig, alarmsMotherConfig}