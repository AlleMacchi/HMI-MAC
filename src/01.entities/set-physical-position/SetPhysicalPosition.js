class SetPhysicalPosition {
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
    if (this.value < -1000000 || this.value > 1000000 || isNaN(this.value)) {
      errors.push("The value must be between -1.000.000 and 1.000.000.");
    }
    if (this.value === 0) {
      errors.push("The physical position cannot be zero.");
    }

    return errors;
  }

  toString() {
    return `${this.value} ${this.unit}`;
  }
}
  
export { SetPhysicalPosition };