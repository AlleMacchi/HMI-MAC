import { GenerateString2nummbers } from './GenerateString2nummbers.js';
import { GenerateString3nummbers } from './GenerateString3nummbers.js';

export function GenerateLogicalPositionString(Row,Col,Dir){
    var RowString = GenerateString3nummbers(Row);
    var ColString = GenerateString2nummbers(Col);
    var DirectionString;
  
    if (Number(Dir) == 0) {
      DirectionString = "A";
    } else {
      DirectionString = "B";
    }
    var Stringa = "A-L01R" + RowString + DirectionString + ColString;
    return Stringa;
}