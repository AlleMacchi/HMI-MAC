import { PLCCommunicationInterface } from '../../interfaces/Communication/PLCCommunicationInterface.js';
import { objectList } from '../../config/Communication/PLCWebserver/DataWrite.js';

// Communication class for OPC UA
  class OPCUACommunication extends PLCCommunicationInterface {
    constructor() {
      super();
      this.data =  objectList;
      
    }
  
   async init() {
      return new Promise((resolve, reject) => {      
        console.log(' OPC-UA: Init Data')
        this.fetchData()
      });
    }
  
    fetchData(){ 
      console.log(' OPC-UA: fetch Data')
    }

    sendData(id, value) {
        if (this.data !== null) {
          // Access this.data only if it's loaded
          console.log(this.data);
          console.log(' OPC-UA: send Data: ' + id + ' ' + value);
      } else {
          console.log('Data not loaded yet');
      }
    }

  }

  export { OPCUACommunication };