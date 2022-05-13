const fibonacci = function(index) {
    if (index < 0) {
        return 'OOPS';
    }
    const series = new Array(index);
    index = index - 1;
    series[0] = 1;
    series[1] = 1;
    for (let i = 2; i <= index; i++){
        series[i] = series[i-1] + series[i-2];
    }
    return series[index];
}

// Do not edit below this line
module.exports = fibonacci;
