export function GenerateString2nummbers(num) {
    // Convert row to a string with leading zeros if necessary
    var numString = num.toString().padStart(2, '0');
    
    // Generate the string using the provided format
    var result = numString;
    
    return result;
}