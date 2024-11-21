const reverseString = function(word) {
    let reversedString = ""
    for (let index = word.length - 1; index >= 0; index--) {
        reversedString += word[index];
    }
    return reversedString
};

reverseString("hello")
// Do not edit below this line
module.exports = reverseString;
