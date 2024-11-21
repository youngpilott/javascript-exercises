const repeatString = function(word, replicaNumber) {
    if (replicaNumber < 0) {
        return "ERROR"
    }
    let replicatedWord = "";
    for (let index = 0; index < replicaNumber; index++) {
        replicatedWord += word;
    }
    return replicatedWord;
};

// Do not edit below this line
module.exports = repeatString;
