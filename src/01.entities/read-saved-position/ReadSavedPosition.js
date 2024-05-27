import config from "../../00.config/config.js";
import { ExtractInfoFromStringPosition } from "../../99.utils/ui/ExtractInfoFromStringPosition.js";

class ReadSavedPosition {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  validate() {
    const errors = [];
    
    if (this.value == null) {
      errors.push("Please select a position on the table of Rows and Columns.");
    }

    if (typeof this.value == "number") {
      errors.push("The value must be a string.");
    }

    if (typeof this.value == "string") {
      const regex = /^A-L01R\d{3}[AB]\d{2}$/;
      if (!this.value.match(regex)) {
        errors.push(
          "Please select a position on the table of Rows and Columns."
        );
        return errors;
      }
    }

    if (this.value != null) {
      if (config.isMotherShuttle) {
        const currentPositionValue = document.getElementById('current-logical-position').textContent;
        const CurrentCol = ExtractInfoFromStringPosition(currentPositionValue).column;
        const ValueCol = ExtractInfoFromStringPosition(this.value).column;
        if (ValueCol != CurrentCol) {
          errors.push("The position must be in the same column.");
        }
      }
    }

    return errors;
  }

  toString() {
    return this.value;
  }
}

export { ReadSavedPosition };
