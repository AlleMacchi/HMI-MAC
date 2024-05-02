import { CommunicationInterface } from '../../04.interfaces/communication/CommunicationInterface.js';

class PLCWebServer  extends CommunicationInterface {
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
    console.log(' OPC-UA: findAll Data')
  }

  findOne(id){
    const matchingObject = this.dataToRead.find(obj => obj.id === id);

    if (!matchingObject) {
      throw new Error(`ID "${id}" not found in reading data`);
    }

    console.log(' OPC-UA: Read Data: ' + id );

  }

  update(id, value) {
    const matchingObject = this.dataToWrite.find(obj => obj.id === id);

    if (!matchingObject) {
      throw new Error(`ID "${id}" not found in writing data`);
    }

    console.log(' OPC-UA: send Data: ' + id + ' ' + value);
  }

}

export { PLCWebServer };