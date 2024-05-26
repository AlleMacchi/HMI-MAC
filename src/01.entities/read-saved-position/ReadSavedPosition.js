class ReadSavedPosition {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  validate() {
    const errors = [];
    if (typeof this.value == "number") {
      errors.push("The value must be a string.");
    }

    if (typeof this.value == "string") {
      const regex = /^A-L01R\d{3}[AB]\d{2}$/;
      if (!this.value.match(regex)) {
        errors.push(
          "Please select a position on the table of Rows and Columns."
        );
        const errorMessage = errors.join('<br>');
          ShowPopup(errorMessage);
          throw new Error(errorMessage);
      }
    }

    return errors;
  }

  toString() {
    return this.value;
  }
}

export { ReadSavedPosition };
