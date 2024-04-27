import { PLCCommunicationInterface } from '../../interfaces/Communication/PLCCommunicationInterface.js';
import { DataMapper } from './PLCWebServerDataMapper.js';
import { objectList } from '../../config/Communication/PLCWebserver/DataWrite.js';
var ioReadCounter = 1;

class PLCWebServer  extends PLCCommunicationInterface {
  constructor() {
    super();
    this.data =  objectList;
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
    $.getJSON("src/config/Communication/PLCWebserver/read/IORead_" + ioReadCounter + ".html", function(data){
      // const mappedData = DataMapper.mapDataToObject(data);
      // console.log(mappedData);
      console.log(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.error("Error fetching data from PLC: " + textStatus);
      reject(errorThrown);
    });

    // Increment counter for next iteration
    ioReadCounter++;

    // Reset counter to 1 if it exceeds the maximum desired value
    if (ioReadCounter > 3) {
        ioReadCounter = 1;
    }

  }

  sendData(id, value) {
    const matchingObject = this.data.find(obj => obj.id === id);

    if (!matchingObject) {
      throw new Error(`Button with ID "${id}" not found in loaded data`);
    }

    const url = matchingObject.url;
    const name = matchingObject.name;
    const sdata = escape(name) + '=' + value;

    $.post(url, sdata, function(result) {})
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error sending data to PLC: " + textStatus);
        throw errorThrown; 
      });
  }

}

export { PLCWebServer };