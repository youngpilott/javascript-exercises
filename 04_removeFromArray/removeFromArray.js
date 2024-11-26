const removeFromArray = function(arr, ...valuesList) {
    for (let index = 0; index < valuesList.length; index++) {
        const element = valuesList[index];
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === element) {
                arr.splice(i, 1)
            }
        }
    }
    return arr
};

// removeFromArray([1,2,3,4], 3)
// Do not edit below this line
module.exports = removeFromArray;
