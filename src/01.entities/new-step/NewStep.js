class NewStep {
  constructor(id, value, unit) {
    this.id = id;
    this.value = value;
    this.unit = unit;
  }

  validate() {
    const errors = [];
    if (typeof this.value !== 'number') {
      errors.push("The value must be numeric.");
    }
    if (this.value < 0 || this.value > 100 || isNaN(this.value)) {
      errors.push("No steps set.");
    }
    return errors;
  }

  toString() {
    return `${this.value} ${this.unit}`;
  }

}
  
export { NewStep };