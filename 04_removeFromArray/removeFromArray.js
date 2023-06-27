const removeFromArray = function() {
    if (arguments.length < 1) return "ERROR";
    let arr = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (typeof arr[j] == typeof arguments[i] && arr[j] == arguments[i]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
