class UpdateNoBooleanValueRepository {
  constructor(communicationService) {
    this.communicationService = communicationService;
  }

  update(id, value) { 
    try {
      this.communicationService.update(id, value);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }
}

export { UpdateNoBooleanValueRepository };