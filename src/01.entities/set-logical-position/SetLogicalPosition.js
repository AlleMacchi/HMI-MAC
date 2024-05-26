import { ExtractInfoFromStringPosition } from '../../99.utils/ui/ExtractInfoFromStringPosition.js';

class SetLogicalPosition {
  constructor(id, value, currentPositionId, isMotherShuttle=false) {
    this.id = id;
    this.value = value;
    this.currentPositionId = currentPositionId;
    this.isMotherShuttle = isMotherShuttle;
    // this.inputElementN = inputElementN;
  }

  validate() {
    const currentPositionValue = document.getElementById(this.currentPositionId).textContent;
    const valueToSet = this.value;

    const errors = [];
    if (typeof valueToSet == "number") {
      errors.push("The value must be a string.");
    }
    if (typeof valueToSet == "string") {
      const regex = /^A-L01R\d{3}[AB]\d{2}$/;
      if (!valueToSet.match(regex)) {
        errors.push(
          "Please select a position on the table of Rows and Columns."
        );
      }
      return errors;
    }

    if (valueToSet !=null || currentPositionValue !=null) { 
      if (this.isMotherShuttle) 
        {
          if (ValueCol  != CurrentCol) {
            errors.push("The position must be in the same column.");
          }
        } 
      else 
        {
          if (ValueRow  != CurrentRow) {
            errors.push("The position must be in the same row.");
          }
          if (ValueDir  != 'A') {
            errors.push("The position must be on the left 'A'.");
          }
        }
    }else{
      errors.push("Data invalid.");
    }

    const ValueRow = ExtractInfoFromStringPosition(valueToSet).row;
    const ValueCol = ExtractInfoFromStringPosition(valueToSet).column;
    const ValueDir = ExtractInfoFromStringPosition(valueToSet).direction;

    const CurrentRow = ExtractInfoFromStringPosition(currentPositionValue).row;
    const CurrentCol = ExtractInfoFromStringPosition(currentPositionValue).column;


    
    return errors;
  }
}
  
export { SetLogicalPosition };