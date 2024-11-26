const sumAll = function(start, end) {
    let sum = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 ||  end < 0) {
        return "ERROR"
    }
    if (start > end) {
        let swap;
        swap = start;
        start = end;
        end = swap;
    }
    for (let index = start; index <= end; index++) {
        sum += index;
    }
        
    return sum
};

// Do not edit below this line
module.exports = sumAll;
