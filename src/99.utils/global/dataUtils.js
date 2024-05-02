/**
 * Function to read bits from an integer.
 * @param {number} integer - The integer to read bits from.
 * @returns {number[]} - An array representing the bits of the integer.
 */
export function readBits(integer) {
    var bits = [];
    var mask = 1;
    for (var i = 0; i < 16; i++) { // Assuming 16-bit integers
        bits.push(integer & mask ? 1 : 0);
        mask <<= 1;
    }
    return bits;
}

/**
 * Function to decode a string into a number.
 * @param {string} encodedString - The string to decode.
 * @returns {number} - The decoded number.
 */
export function decodedString(encodedString) {
    var elem = document.createElement('textarea');
    elem.innerHTML = encodedString;
    return Number(elem.value);
}

// Exporting the functions to make them accessible outside this module
export default {
    readBits,
    decodedString
}