import { ExtractInfoFromStringPosition } from '../../99.utils/ui/ExtractInfoFromStringPosition.js';

class SetLogicalPosition {
  constructor(id, value, currentPositionId, isMotherShuttle=false) {
    this.id = id;
    this.value = value;
    this.currentPositionId = currentPositionId;
    this.isMotherShuttle = isMotherShuttle;
  }

  validate() {
    const currentPositionValue = document.getElementById(this.currentPositionId ).textContent;
    const valueToSet = this.value;

    const ValueRow = ExtractInfoFromStringPosition(valueToSet).row;
    const ValueCol = ExtractInfoFromStringPosition(valueToSet).column;
    const ValueDir = ExtractInfoFromStringPosition(valueToSet).direction;

    const CurrentRow = ExtractInfoFromStringPosition(currentPositionValue).row;
    const CurrentCol = ExtractInfoFromStringPosition(currentPositionValue).column;

    const errors = [];
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
    return errors;
  }
}
  
export { SetLogicalPosition };