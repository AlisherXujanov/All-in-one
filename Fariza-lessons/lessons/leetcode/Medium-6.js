// Zigzag Conversion

// The string "PAYPALISHIRING" is written in a zigzag 
// pattern on a given number of rows like this: (you may want to 
//     display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion 
// given a number of rows:

// string convert(string s, int numRows);

// =============================================================
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// =============================================================
// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// =============================================================
// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

// =============================================================
// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000
// =============================================================


var convert = function (s, numRows) {
    if (numRows === 1) return s;

    // Create an array to hold the rows
    const rows = new Array(s.length).fill("");
    let currentRow = 0;
    let goingDown = false;

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i]; // Add the character to the current row
        // Change direction when we hit the top or bottom row
        if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
        currentRow += goingDown ? 1 : -1; // Move up or down
    }

    // Combine all rows to form the final zigzag string
    return rows.join("");
};

let s = "PAYPALISHIRING"
let numRows = 4
console.log(convert(s, numRows)); // "PINALSIGYAHRPI"