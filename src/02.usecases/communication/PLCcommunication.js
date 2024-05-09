import { OPCUACommunication } from '../../03.repositories/communication/OpcUaRepository.js';
import { PLCWebServer } from '../../03.repositories/communication/WebServerRepository.js'; 


class PLCCommunication {
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

  async findAll() {
    try {
      const data = await this.communicationMethod.findAll();
      return data;
    } catch (error) {
      console.error("Error reading data:", error);
      throw error;
    }
  }

  async findOne(id) {
    try {
      const data = await this.communicationMethod.findOne(id);
      return data;
    } catch (error) {
      console.error("Error reading data:", error);
      throw error;
    }
  }

  async update(id, value) {
    try {
      await this.communicationMethod.update(id, value);
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
  
const plcCommunicationManager = new PLCCommunication(CommunicationFactory.createCommunication("PLCWebServer"));

export { plcCommunicationManager };