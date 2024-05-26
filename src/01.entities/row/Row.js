import config  from "../../00.config/config.js";
import { ShowPopup } from "../../99.utils/ui/Popup.js";

class Row {
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
        errors.push("The 'Row' inputs values cannot be empty.");
      }

      if( this.value == 0){
        errors.push("The row and column numbers must be greater than 0.");
      }

      // Check the row number range
      if (this.value < 0 || this.value > config.maxRow) {
        errors.push(`The row number ${this.value} is out of the allowed range (1-${config.maxRow}).`);
      }

      return errors;
    }
  
    toString() {
      return this.value.toString();
    }
  }
  
  export { Row };
  