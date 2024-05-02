import { CommunicationInterface } from '../../04.interfaces/communication/CommunicationInterface.js';
import { DataMapper } from '../../99.utils/repositories/webserver/DataMapper.js';
import { DataWriteList } from '../../00.config/data/webserver/write/DataWriteList.js';
import { DataReadList } from '../../00.config/data/webserver/read/DataReadList.js';

class PLCWebServer extends CommunicationInterface {
    constructor() {
        super();
        this.dataToWrite = DataWriteList;
        this.dataToRead = DataReadList;
    }

    async init() {
        return new Promise((resolve, reject) => {
            this.findAll().then(() => {
                resolve();
            }).catch(error => {
                console.error("Error reading data from PLC: " + error);
                reject(error);
            });
        });
    }

    findAll() {
        return new Promise((resolve, reject) => {
            $.getJSON("cleanArchitecture/00.config/data/webserver/read/PLCvariables/IORead.html", function(data) {
                // const mappedData = DataMapper.mapDataToObject(data);
                // console.log(mappedData);
                console.log(data);
                resolve(data);
            }).fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error reading data from PLC: " + textStatus);
                reject(errorThrown);
            });
        });
    }

    async findOne(id) {
        const matchingObject = this.dataToRead.find(obj => obj.id === id);

        if (!matchingObject) {
            throw new Error(`ID "${id}" not found in reading data`);
        }

        const url = matchingObject.url;

        try {
            const data = await $.getJSON(url);
            console.log(data);
            return data;
        } catch (error) {
            console.error("Error reading data from PLC:", error);
            throw error;
        }
    }

    update(id, value) {
        const matchingObject = this.dataToWrite.find(obj => obj.id === id);

        if (!matchingObject) {
            throw new Error(`ID "${id}" not found in writing data`);
        }

        const url = matchingObject.url;
        const name = matchingObject.name;
        const sdata = escape(name) + '=' + value;

        $.post(url, sdata, function(result) {}).fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Error sending data to PLC: " + textStatus);
            throw errorThrown;
        });
    }
}

export { PLCWebServer };