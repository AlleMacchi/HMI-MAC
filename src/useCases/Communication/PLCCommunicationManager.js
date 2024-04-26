import { OPCUACommunication } from '../../repositories/Communication/OPCUARepositories.js';
import { PLCWebServer } from '../../repositories/Communication/PLCWeServerRepositories.js'; 


class PLCCommunicationManager {
  constructor(communicationMethod) {
    this.communicationMethod = communicationMethod;
  }

  async init() {
    try {
      // Initialize the communication method
      await this.communicationMethod.init();
      // console.log("Communication Manager initialized.");
    } catch (error) {
      console.error("Error initializing Communication Manager:", error);
      throw error;
    }
  }

  async fetchData() {
    try {
      // Fetch data using the communication method
      const data = await this.communicationMethod.fetchData();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async sendData(id, value) {
    try {
      await this.communicationMethod.sendData(id, value);
    } catch (error) {
      console.error("Error sending data:", error);
      throw error;
    }
  }

}

class CommunicationFactory {
    static createCommunication(method) {
      switch (method) {
        case "OPCUA":
          return new OPCUACommunication();
        case "PLCWebServer":
          return new PLCWebServer();
        default:
          throw new Error("Invalid communication method specified.");      
      }
    }
  }
  
const plcCommunicationManager = new PLCCommunicationManager(CommunicationFactory.createCommunication("PLCWebServer"));

export { plcCommunicationManager};