import { CommunicationInterface } from "../../04.interfaces/communication/CommunicationInterface.js";
import { DataWriteList } from "../../00.config/data/opcua/write/DataWriteList.js";
import { DataReadList } from "../../00.config/data/opcua/read/DataReadList.js";

import { UpdateDisplayInit } from "../../06.ui/component/UpdateDisplayInit.js";

class OPCUACommunication extends CommunicationInterface {
  constructor() {
    super();
    this.dataToWrite = DataWriteList;
    this.dataToRead = DataReadList;
  }

  async init() {
    try {
      const mappedData = {

        BabyNo: 10,
        SelPhysicalLogical: 0,
        PositionToReach_mm: 5,
        PositionToReach_logical: 10,
      };
      UpdateDisplayInit(mappedData);
      return mappedData;
    } catch (error) {
      console.error("Error initializing: " + error);
      throw error;
    }
  }

  findAll() {
    try {
      const mappedData = {


        StatusMachine: 5,

        StatusMode: 0,
        CarrierInPosition: 0,
        CarrierIsMoving: 0,
        CarrierIsFault: 0,
        LifterInPositionUp: 0,
        LifterInPositionDown: 0,
        LifterIsMovingUp: 0,
        LifterIsFault: 0,
        PalletDetectedSideA: 0,
        PalletDetectedSideB: 0,
        MotherDetectedSideA: 0,
        MotherDetectedSideB: 0,
        PathNotFreeSideA: 0,
        PathNotFreeSideB: 0,
        ShuttleOnBoardTheMother: 0,
        LifterIsMovingDown: 0,

        ActualStep: 3,
        StatusCarrierActPositon_logicalRow: 4,
        StatusCarrierActPositon_logicalCol: 5,
        StatusCarrierActPositon_logicalDir: 6,

        Alarm_Controller_000: 0,
        Alarm_Controller_001: 0,
        Alarm_Controller_002: 0,
        Alarm_Controller_003: 0,
        Alarm_Controller_004: 0,
        Alarm_Controller_005: 0,
        Alarm_Controller_006: 0,
        Alarm_Controller_007: 0,
        Alarm_Controller_008: 0,
        Alarm_Controller_009: 0,
        Alarm_Controller_010: 0,
        Alarm_Controller_011: 0,
        Alarm_Controller_012: 0,
        Alarm_Controller_013: 0,
        Alarm_Controller_014: 0,
        Alarm_Controller_015: 0,

        Alarm_Controller_100: 0,
        Alarm_Controller_101: 0,
        Alarm_Controller_102: 0,
        Alarm_Controller_103: 0,
        Alarm_Controller_104: 0,
        Alarm_Controller_105: 0,
        Alarm_Controller_106: 0,
        Alarm_Controller_107: 0,
        Alarm_Controller_108: 0,
        Alarm_Controller_109: 0,
        Alarm_Controller_110: 0,
        Alarm_Controller_111: 0,
        Alarm_Controller_112: 0,
        Alarm_Controller_113: 0,
        Alarm_Controller_114: 0,
        Alarm_Controller_115: 0,

        Alarm_Carrier_000: 0,
        Alarm_Carrier_001: 0,
        Alarm_Carrier_002: 0,
        Alarm_Carrier_003: 0,
        Alarm_Carrier_004: 0,
        Alarm_Carrier_005: 0,
        Alarm_Carrier_006: 0,
        Alarm_Carrier_007: 0,
        Alarm_Carrier_008: 0,
        Alarm_Carrier_009: 0,
        Alarm_Carrier_010: 0,
        Alarm_Carrier_011: 0,
        Alarm_Carrier_012: 0,
        Alarm_Carrier_013: 0,
        Alarm_Carrier_014: 0,
        Alarm_Carrier_015: 0,

        Alarm_Lifter_000: 0,
        Alarm_Lifter_001: 0,
        Alarm_Lifter_002: 0,
        Alarm_Lifter_003: 0,
        Alarm_Lifter_004: 0,
        Alarm_Lifter_005: 0,
        Alarm_Lifter_006: 0,
        Alarm_Lifter_007: 0,
        Alarm_Lifter_008: 0,
        Alarm_Lifter_009: 0,
        Alarm_Lifter_010: 0,
        Alarm_Lifter_011: 0,
        Alarm_Lifter_012: 0,
        Alarm_Lifter_013: 0,
        Alarm_Lifter_014: 0,
        Alarm_Lifter_015: 0,

        CarrierActSpeed: 3,
        CarrierActPosition_mm: 5,
        TaskNumber: 3,
        BatteryLevel: 10,
      };
      return mappedData;
    } catch (error) {
      console.error("Error reading: " + error);
      throw error;
    }
  }

  findOne(id) {
    console.log(" OPC-UA: findOne Data: " + id);
  }

  update(id, value) {
    const matchingObject = this.dataToWrite.find((obj) => obj.id === id);

    if (!matchingObject) {
      throw new Error(`ID "${id}" not found in writing data`);
    }

    console.log(" OPC-UA: send Data id: " + id + " Value:" + value);
  }
}

export { OPCUACommunication };
