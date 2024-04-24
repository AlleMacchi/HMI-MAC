// Communication interface
class CommunicationInterface {
    async fetchData() {
      throw new Error("fetchData method must be implemented");
    }
  }
  
  // Communication class for PLC using AJAX
  class PLCCommunication extends CommunicationInterface {
    async fetchData() {
      return new Promise((resolve, reject) => {
        $.getJSON("data/read/IORead.html", function(data) {
          resolve(data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
          console.error("Error fetching data from PLC: " + textStatus);
          reject(errorThrown);
        });
      });
    }
  }
  
  // Communication class for OPC UA
  class OPCUACommunication extends CommunicationInterface {
    async fetchData() {
      // Implement OPC UA communication logic here
      // Example:
      // return new Promise((resolve, reject) => {
      //   // OPC UA communication logic
      // });
    }
  }
  
  // Communication Manager
  class CommunicationManager {
    constructor(communicationMethod) {
      this.communicationMethod = communicationMethod;
    }
  
    async fetchData() {
      try {
        const data = await this.communicationMethod.fetchData();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    }
  }
  
  // Usage
  // Decide which communication method to use
  const usePLC = true; // Set to false to use OPC UA instead
  
  let communicationMethod;
  if (usePLC) {
    communicationMethod = new PLCCommunication();
  } else {
    communicationMethod = new OPCUACommunication();
  }
  
  const communicationManager = new CommunicationManager(communicationMethod);
  
  // Now you can use communicationManager to fetch data
  communicationManager.fetchData()
    .then(data => {
      // Process the fetched data
      console.log("Data fetched:", data);
    })
    .catch(error => {
      // Handle errors
      console.error("Error fetching data:", error);
    });
  