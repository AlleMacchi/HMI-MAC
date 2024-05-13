export function ExtractInfoFromStringPosition(inputString) {
    // Regular expression to match the pattern
    const regex = /R(\d+)([AB]\d+)/;
    
    // Executing the regex on the input string
    const matches = regex.exec(inputString);
    
    // Extracting values
    if (matches && matches.length >= 3) {
        const row = parseInt(matches[1], 10);
        const direction = matches[2].charAt(0); // Extracting the first character after 'R'
        const column = parseInt(matches[2].substring(1), 10); // Extracting the digits after 'A' or 'B'
        
        return {
            row,
            direction,
            column
        };
    } else {
        // Return null if no match found
        return null;
    }
}