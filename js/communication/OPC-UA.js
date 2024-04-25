import { CommunicationInterface } from './interface.js';

// Communication class for OPC UA
  class OPCUACommunication extends CommunicationInterface {
    constructor() {
      super();
    }
  
    async init() {
      return new Promise((resolve, reject) => {      
        console.log(' OPC-UA: Init Data')
        this.fetchData()
        resolve()
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.error("Error fetching data from PLC: " + textStatus);
          reject(errorThrown);
        });
      });
    }
  
    fetchData(){ 
      console.log(' OPC-UA: fetch Data')
    }

  }

  export { OPCUACommunication };