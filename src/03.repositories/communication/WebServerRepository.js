import { CommunicationInterface } from '../../04.interfaces/communication/CommunicationInterface.js';
import { DataMapper } from '../../05.adapters/webserver/DataMapper.js';
import { DataMapperInit } from '../../05.adapters/webserver/DataMapperInit.js';
import { DataWriteList } from '../../00.config/data/webserver/write/DataWriteList.js';
import { DataReadList } from '../../00.config/data/webserver/read/DataReadList.js';


async function fetchDataFromURL(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error reading data from URL: " + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                console.error("Error reading data from URL: " + error.message);
                reject(error);
            });
    });
}

class PLCWebServer extends CommunicationInterface {
    constructor() {
        super();
        this.dataToWrite = DataWriteList;
        this.dataToRead = DataReadList;

        this.url_Init = "src/00.config/data/webserver/read/PLCvariables/IOReadInit.html"
        this.url_Read = "src/00.config/data/webserver/read/PLCvariables/IORead.html"
    }
   
    // async init() {
    //     try {
    //         // Fetch data from URL and map it
    //         const data = await fetchDataFromURL(this.url_Init);
    //         console.log(data);
    
    //         // Call findAll() after data retrieval
    //         await this.findAll();
    //         return Promise.resolve(); // Resolve the outer promise
    //     } catch (error) {
    //         console.error("Error initializing: " + error);
    //         return Promise.reject(error); // Reject the outer promise if any error occurs
    //     }
    // }
    async init() {
        try {
            const data = await fetchDataFromURL(this.url_Init);
            const mappedData = DataMapperInit.mapDataToObject(data);
            console.log(mappedData);
            return mappedData;
        } catch (error) {
            console.error("Error initializing: " + error);
            throw error;
        }
    }
    
    async findAll() {
        try {
            const data = await fetchDataFromURL(this.url_Read);
            const mappedData = DataMapper.mapDataToObject(data);
            console.log(mappedData);
            return mappedData;
        } catch (error) {
            console.error("Error finding all data: " + error);
            throw error;
        }
    }

    async findOne(id) {
        try {
            const matchingObject = this.dataToRead.find(obj => obj.id === id);
    
            if (!matchingObject) {
                throw new Error(`ID "${id}" not found in reading data`);
            }    
            const url = matchingObject.url;
            const data = await fetchDataFromURL(url);
            console.log(data);
            return data;
        } catch (error) {
            console.error("Error reading data from PLC: " + error.message);
            throw error;
        }
    }
    

    async update(id, value) {
        const matchingObject = this.dataToWrite.find(obj => obj.id === id);

        if (!matchingObject) {
            throw new Error(`ID "${id}" not found in writing data`);
        }

        return new Promise((resolve, reject) => {
           
            const url = matchingObject.url;
            const name = matchingObject.name;
            const sdata = escape(name) + '=' + value;
           
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    // Request finished, do something with the response if needed
                }
            };
            xhr.send(sdata);
        });
    }
}

export { PLCWebServer };