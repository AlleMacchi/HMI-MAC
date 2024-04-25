import { CommunicationInterface } from './interface.js';

class PLCWebServer  extends CommunicationInterface {
  constructor() {
    super();
  }

  async init() {
    return new Promise((resolve, reject) => {      
      this.fetchData()
      resolve()
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error fetching data from PLC: " + textStatus);
        reject(errorThrown);
      });
    });
  }

  fetchData(){ 
    $.getJSON("data/read/IORead.html", function(data){
      console.log(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.error("Error fetching data from PLC: " + textStatus);
      reject(errorThrown);
    });
  }
}

export { PLCWebServer };