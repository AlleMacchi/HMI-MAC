import { CommunicationInterface } from '../../04.interfaces/communication/CommunicationInterface.js';
import { DataWriteList } from '../../00.config/data/opcua/write/DataWriteList.js';
import { DataReadList } from '../../00.config/data/opcua/read/DataReadList.js';

import { UpdateDisplayInit } from '../../06.ui/component/UpdateDisplayInit.js';


class OPCUACommunication  extends CommunicationInterface {
  constructor() {
    super();
    this.dataToWrite =  DataWriteList;
    this.dataToRead =  DataReadList;
  }

  async init() {
    try {
      const mappedData = {
        PLC_CarrierSpeed: 10
      };
      UpdateDisplayInit(mappedData);
      return mappedData;
  } catch (error) {
      console.error("Error initializing: " + error);
      throw error;
  }
  }

  findAll(){ 
    try {
      const mappedData = {
        ActualStep: 5
      };
      return mappedData;
  } catch (error) {
      console.error("Error reading: " + error);
      throw error;
  }
  }

  findOne(id){ 
    console.log(' OPC-UA: findOne Data: ' + id );
  }

  update(id, value) {
    const matchingObject = this.dataToWrite.find(obj => obj.id === id);

    if (!matchingObject) {
      throw new Error(`ID "${id}" not found in writing data`);
    }

    console.log(' OPC-UA: send Data id: ' + id + ' Value:' + value);
  }

}

export { OPCUACommunication };