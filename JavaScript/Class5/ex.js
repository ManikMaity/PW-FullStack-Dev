// Objective: Write a JavaScript function isPalindrome(str) that checks if a given string str is a palindrome. 
// A palindrome is a word, phrase, number, or other sequences of characters that reads 
// the same forward and backward (ignoring spaces, punctuation, and capitalization). 
// Example: Input: isPalindrome("racecar") Output: true Input: isPalindrome("hello") Output: false


function isPalindrome(word) {
    // removed all spaces and coverted all to lowercase
    word = (word.toLowerCase()).replace(" ", "");
    // made a reversed word charecter array 
    let word_reverse = [];
    for (let i = word.length - 1; i >= 0; i--) {
        word_reverse.push(word[i])
    }
    // array to string 
    word_reverse = word_reverse.join("");

    if (word === word_reverse) {
        return true;
    } else {
        return false;
    }

}

console.log(isPalindrome("Race car"));