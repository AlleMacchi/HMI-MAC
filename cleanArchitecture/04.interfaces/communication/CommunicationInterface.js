class CommunicationInterface {
    init() {
      throw new Error("init method must be implemented");
    }
  
    findAll() {
      throw new Error("findAll method must be implemented");
    }

    findOne(id) {
      throw new Error("findOne method must be implemented");
    }
  
    update(id, value) {
      throw new Error("update method must be implemented");
    }
  }
  
  export { CommunicationInterface };