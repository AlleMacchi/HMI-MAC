import { PLCCommunicationInterface } from '../../interfaces/Communication/PLCCommunicationInterface.js';
import { DataMapper } from './PLCWebServerDataMapper.js';
import { objectList } from '../../config/Communication/PLCWebserver/DataWrite.js';

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
    $.getJSON("src/config/read/IORead.html", function(data){
      const mappedData = DataMapper.mapDataToObject(data);
      console.log(mappedData);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.error("Error fetching data from PLC: " + textStatus);
      reject(errorThrown);
    });
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