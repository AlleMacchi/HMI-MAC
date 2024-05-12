import { readBits, decodedString } from '../../99.utils/global/dataUtils.js';

const WebServerDataMapper = {
    mapDataToObject: function(data) {
        const decodedArray2 = decodedString(data.Array_2);
        const bitArr2 = readBits(decodedArray2);

        const decodedArray8 = decodedString(data.Array_8);
        const bitArr8 = readBits(decodedArray8);

        const decodedArray9 = decodedString(data.Array_9);
        const bitArr9 = readBits(decodedArray9);

        const decodedArray10 = decodedString(data.Array_10);
        const bitArr10 = readBits(decodedArray10);

        const decodedArray11 = decodedString(data.Array_11);
        const bitArr11 = readBits(decodedArray11);
    
        return {
        StatusMachine: decodedString(data.Array_1),

        StatusMode: bitArr2[0],
        CarrierInPosition: bitArr2[1],
        CarrierIsMoving: bitArr2[2],
        CarrierIsFault: bitArr2[3],
        LifterInPositionUp: bitArr2[4],
        LifterInPositionDown: bitArr2[5],
        LifterIsMovingUp: bitArr2[6],
        LifterIsFault: bitArr2[7],
        PalletDetectedSideA: bitArr2[8],
        PalletDetectedSideB: bitArr2[9],
        MotherDetectedSideA: bitArr2[10],
        MotherDetectedSideB: bitArr2[11],
        PathNotFreeSideA: bitArr2[12],
        PathNotFreeSideB: bitArr2[13],
        ShuttleOnBoardTheMother: bitArr2[14],
        LifterIsMovingDown: bitArr2[15],

        ActualStep: decodedString(data.Array_3),
        StatusCarrierActPositon_logicalRow: decodedString(data.Array_4),
        StatusCarrierActPositon_logicalCol: decodedString(data.Array_5),
        StatusCarrierActPositon_logicalDir: decodedString(data.Array_6),
        PositionResult: decodedString(data.Array_7),

        Alarm_Controller_000:  bitArr8[0],
        Alarm_Controller_001: bitArr8[1],
        Alarm_Controller_002: bitArr8[2],
        Alarm_Controller_003: bitArr8[3],
        Alarm_Controller_004: bitArr8[4],
        Alarm_Controller_005: bitArr8[5],
        Alarm_Controller_006: bitArr8[6],
        Alarm_Controller_007: bitArr8[7],
        Alarm_Controller_008: bitArr8[8],
        Alarm_Controller_009: bitArr8[9],
        Alarm_Controller_010: bitArr8[10],
        Alarm_Controller_011: bitArr8[11],
        Alarm_Controller_012: bitArr8[12],
        Alarm_Controller_013: bitArr8[13],
        Alarm_Controller_014: bitArr8[14],
        Alarm_Controller_015: bitArr8[15],

        Alarm_Controller_100:  bitArr9[0],
        Alarm_Controller_101: bitArr9[1],
        Alarm_Controller_102: bitArr9[2],
        Alarm_Controller_103: bitArr9[3],
        Alarm_Controller_104: bitArr9[4],
        Alarm_Controller_105: bitArr9[5],
        Alarm_Controller_106: bitArr9[6],
        Alarm_Controller_107: bitArr9[7],
        Alarm_Controller_108: bitArr9[8],
        Alarm_Controller_109: bitArr9[9],
        Alarm_Controller_110: bitArr9[10],
        Alarm_Controller_111: bitArr9[11],
        Alarm_Controller_112: bitArr9[12],
        Alarm_Controller_113: bitArr9[13],
        Alarm_Controller_114: bitArr9[14],
        Alarm_Controller_115: bitArr9[15],

        Alarm_Carrier_000:  bitArr10[0],
        Alarm_Carrier_001: bitArr10[1],
        Alarm_Carrier_002: bitArr10[2],
        Alarm_Carrier_003: bitArr10[3],
        Alarm_Carrier_004: bitArr10[4],
        Alarm_Carrier_005: bitArr10[5],
        Alarm_Carrier_006: bitArr10[6],
        Alarm_Carrier_007: bitArr10[7],
        Alarm_Carrier_008: bitArr10[8],
        Alarm_Carrier_009: bitArr10[9],
        Alarm_Carrier_010: bitArr10[10],
        Alarm_Carrier_011: bitArr10[11],
        Alarm_Carrier_012: bitArr10[12],
        Alarm_Carrier_013: bitArr10[13],
        Alarm_Carrier_014: bitArr10[14],
        Alarm_Carrier_015: bitArr10[15],

        Alarm_Lifter_000:  bitArr11[0],
        Alarm_Lifter_001: bitArr11[1],
        Alarm_Lifter_002: bitArr11[2],
        Alarm_Lifter_003: bitArr11[3],
        Alarm_Lifter_004: bitArr11[4],
        Alarm_Lifter_005: bitArr11[5],
        Alarm_Lifter_006: bitArr11[6],
        Alarm_Lifter_007: bitArr11[7],
        Alarm_Lifter_008: bitArr11[8],
        Alarm_Lifter_009: bitArr11[9],
        Alarm_Lifter_010: bitArr11[10],
        Alarm_Lifter_011: bitArr11[11],
        Alarm_Lifter_012: bitArr11[12],
        Alarm_Lifter_013: bitArr11[13],
        Alarm_Lifter_014: bitArr11[14],
        Alarm_Lifter_015: bitArr11[15],

        CarrierActSpeed: decodedString(data.Array_12),
        CarrierActPosition_mm: decodedString(data.Array_13),
        Position_mm: decodedString(data.Array_14),
        TaskNumber: decodedString(data.Array_15),
        BatteryLevel: decodedString(data.Array_16)
        };
    }
};

export { WebServerDataMapper as DataMapper};