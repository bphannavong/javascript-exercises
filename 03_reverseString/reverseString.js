const reverseString = function(string) {
    const reversedArray = new Array(string.length);
    for (let i = 0; i <= string.length; i++){
        reversedArray[i] = string[string.length - i];
    }
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
