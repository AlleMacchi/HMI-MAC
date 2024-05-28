class Battery {
    constructor(id, value) {
      this.id = id;
      this.value = value;     
    }
  
    validate() {
      const errors = [];
      if (typeof this.value !== "number") {
        errors.push("The value must be a number.");
      }

      if (
        !this.value ||
        isNaN(this.value) ||
        this.value === undefined ||
        this.value === null ||
        this.value === ""
      ) {
        errors.push("The input values cannot be empty.");
      }

      if( this.value < 0 || this.value >= 100){
        errors.push("The input number is out of the allowed range (0-100)");
      }

      return errors;
    }
  
    toString() {
      return `${this.value.toString()}%`;
    }
  }
  
  export { Battery };
  