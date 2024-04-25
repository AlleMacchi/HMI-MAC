import { CommunicationInterface } from './interface.js';
import { DataMapper } from './DataMapper.js';

// const DataMapper = {
//   mapDataToObject: function(data) {
//     const object = {
//       Array_1: data.Array_1,
//       Array_2: data.Array_2,
//       Array_3: data.Array_3,
//       Array_4: data.Array_4,
//       Array_5: data.Array_5,
//       Array_6: data.Array_6,
//       Array_7: data.Array_7
//     };
//     return object;
//   }
// };


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
      const mappedData = DataMapper.mapDataToObject(data);
      console.log(mappedData);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.error("Error fetching data from PLC: " + textStatus);
      reject(errorThrown);
    });
  }
}

export { PLCWebServer };