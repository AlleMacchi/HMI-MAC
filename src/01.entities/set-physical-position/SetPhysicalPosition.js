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
      const errorMessage = errors.join('<br>');
          ShowPopup(errorMessage);
          throw new Error(errorMessage);
    }
    if (this.value < -1000000 || this.value > 1000000 || isNaN(this.value)) {
      errors.push("The value must be between -1.000.000 and 1.000.000.");
      const errorMessage = errors.join('<br>');
          ShowPopup(errorMessage);
          throw new Error(errorMessage);
    }
    if (this.value === 0) {
      errors.push("The physical position cannot be zero.");
      const errorMessage = errors.join('<br>');
          ShowPopup(errorMessage);
          throw new Error(errorMessage);
    }
    return errors;
  }

  toString() {
    return `${this.value} ${this.unit}`;
  }
}
  
export { SetPhysicalPosition };