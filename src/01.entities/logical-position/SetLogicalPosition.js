class SetLogicalPosition {
  constructor(id, actRow, actCol, row, col, dir, isMotherShuttle=false) {
    this.id = id;
    this.row = row;
    this.col = col;
    this.dir = dir;
    this.actRow = actRow;
    this.actCol = actCol;
    this.isMotherShuttle = isMotherShuttle;
  }

  validate() {
    const errors = [];
    if (this.isMotherShuttle) 
      {
        if (this.col  != this.actCol) {
          errors.push("The position must be in the same column.");
        }
      } 
    else 
      {
        if (this.row  != this.actRow) {
          errors.push("The position must be in the same row.");
        }
        if (this.dir  != 'A') {
          errors.push("The position must be on the left 'A'.");
        }
      }

    return errors;
  }
}
  
export { SetLogicalPosition };