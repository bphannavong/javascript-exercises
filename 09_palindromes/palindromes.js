const palindromes = function (string) {
    const noPuncuation = string.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toUpperCase();
    // const halfLen = Math.floor(noPuncuation.length/2);
    // for (let i = 0; i <= halfLen; i++) {
    //     if (noPuncuation[i] !== noPuncuation[noPuncuation.length - 1 - i]){
    //         return false;
    //     }
    // }
    // return true;
    return (noPuncuation.split('').reverse().join('') == noPuncuation);
};

// Do not edit below this line
module.exports = palindromes;
