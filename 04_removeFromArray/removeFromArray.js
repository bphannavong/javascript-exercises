const removeFromArray = function(array, ...targets) {
    for (const target of targets){
        array = array.filter((element) => element !== target);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
