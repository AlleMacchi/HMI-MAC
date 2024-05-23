class WMSEchoStatus {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  validate() {
    const errors = [];

    if (
      !this.value ||
      isNaN(this.value) ||
      this.value === undefined ||
      this.value === null ||
      this.value === ""
    ) {
      errors.push("The ECHOStatus value cannot be empty.");
    }

    if (typeof this.value !== "number") {
      errors.push("The value must be numeric.");
    }
    if (this.value === 0) {
      errors.push("The physical position cannot be zero.");
    }
    return errors;
  }
}

export { WMSEchoStatus };
