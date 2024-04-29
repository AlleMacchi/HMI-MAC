class Validator {
    constructor(entity) {
      this.entity = entity;
    }
  
    isValid(value) {
      const entityInstance = new this.entity(null, value); // You can pass null for id if it's not required in the constructor
      return entityInstance.isValid();
    }
  }
  
  export { Validator };