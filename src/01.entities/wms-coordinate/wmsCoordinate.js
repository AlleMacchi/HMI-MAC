import config from "../../00.config/config.js";

class WMSCoordinate {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  validate() {
    const errors = [];
    
    if (typeof this.value !== "string") {
      errors.push("The value must be a string.");
    } else {
      // Use a regular expression to extract the numbers
      const match = this.value.match(/R(\d+)A(\d+)/) || this.value.match(/R(\d+)B(\d+)/);

      if (match) {
        // Extract the row and column numbers
        const rowNumber = parseInt(match[1], 10);
        const columnNumber = parseInt(match[2], 10);
        
        console.log('rowNumber', rowNumber);
        console.log('columnNumber', columnNumber);

        if (
          !rowNumber ||
          isNaN(rowNumber) ||
          rowNumber === undefined ||
          rowNumber === null ||
          rowNumber === ""
        ) {
          errors.push("The Row value cannot be empty.");
        }

        if (
          !columnNumber ||
          isNaN(columnNumber) ||
          columnNumber === undefined ||
          columnNumber === null ||
          columnNumber === ""
        ) {
          errors.push("The Column value cannot be empty.");
        }

        if( rowNumber == 0 || columnNumber == 0){
          errors.push("The row and column numbers must be greater than 0.");
        }

        // Check the row number range
        if (rowNumber < 0 || rowNumber > config.maxRow) {
          errors.push(`The row number ${rowNumber} is out of the allowed range (1-${config.maxRow}).`);
        }
        
        // Check the column number range
        if (columnNumber < 0 || columnNumber > config.maxColumns) {
          errors.push(`The column number ${columnNumber} is out of the allowed range (1-${config.maxColumns}).`);
        }
      } else {
        // If no numbers are found or the pattern does not match
        errors.push("The value format is incorrect. It should be something like 'A-L01R10A20'.");
      }
    }

    return errors;
  }
}

export { WMSCoordinate };
