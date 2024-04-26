class SetValueRepository {
    constructor(communicationService) {
      this.communicationService = communicationService;
    }
  
    setValue(id, value) { 
      try {
        this.communicationService.sendData(id, value);
      } catch (error) {
        console.error('Error sending position data:', error);
      }
    }
  }

  export { SetValueRepository };