// Given two strings ransomNote and magazine, 
// return true if ransomNote can be constructed by 
// using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.
// =============================================================
// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// =============================================================
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// =============================================================
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
// =============================================================
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
        
    let ransomNoteArr = ransomNote.split('');
    let magazineArr = magazine.split('');
    
    for(let i = 0; i < ransomNoteArr.length; i++) {
        let index = magazineArr.indexOf(ransomNoteArr[i]);
        if(index === -1) {
            return false;
        } else {
            magazineArr.splice(index, 1);
        }
    }
    return true;
};