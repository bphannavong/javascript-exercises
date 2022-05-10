const sumAll = function(a, b) {
    if (!(a >= 0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b))){
        return 'ERROR';
    }
    let sum = 0;
    let start = (a < b) ? a : b;
    let end = (a < b) ? b : a;
    do {
        sum += start;
        start++;
    } while (start <= end);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
