import { CommunicationInterface } from './interface.js';

class PLCWebServer  extends CommunicationInterface {
  // constructor() {
  //   super();
  // }

  // async init() {
  //   return new Promise((resolve, reject) => {      
  //     this.fetchData()
  //     resolve()
  //     .fail(function(jqXHR, textStatus, errorThrown) {
  //       console.error("Error fetching data from PLC: " + textStatus);
  //       reject(errorThrown);
  //     });
  //   });
  // }

  // fetchData(){ 
  //   $.getJSON("data/read/IORead.html", function(data){
  //     console.log(data);
  //   })
  // }
  constructor() {
    super();
  }

  async init() {
    return new Promise((resolve, reject) => {      
      console.log('PLC WebServer: Init Data')
      this.fetchData()
      resolve()
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error fetching data from PLC: " + textStatus);
        reject(errorThrown);
      });
    });
  }

  fetchData(){ 
    console.log('PLC WebServer: fetch Data')
  }

}

export { PLCWebServer };