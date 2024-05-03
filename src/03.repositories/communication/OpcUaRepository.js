import { CommunicationInterface } from '../../04.interfaces/communication/CommunicationInterface.js';
import { DataWriteList } from '../../00.config/data/opcua/write/DataWriteList.js';
import { DataReadList } from '../../00.config/data/opcua/read/DataReadList.js';


class OPCUACommunication  extends CommunicationInterface {
  constructor() {
    super();
    this.dataToWrite =  DataWriteList;
    this.dataToRead =  DataReadList;
  }

  async init() {
    return new Promise((resolve, reject) => {      
      this.findAll()
      console.log('OPC-UA: Init Data')
      resolve()
    });
  }

  findAll(){ 
    console.log(' OPC-UA: findAll Data ');
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