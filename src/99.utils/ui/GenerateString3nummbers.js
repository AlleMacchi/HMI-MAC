export function GenerateString3nummbers(num) {
    // Convert row to a string with leading zeros if necessary
    var numString = num.toString().padStart(3, '0');
    
    // Generate the string using the provided format
    var result = numString;
    
    return result;
}