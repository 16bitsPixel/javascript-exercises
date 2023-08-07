const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    let fibPart = [0, 1];
    for (let i = 1; i < num; i++) {
        fibPart.push(fibPart[i] + fibPart[i - 1]);
    }
    return fibPart[num];
};

// Do not edit below this line
module.exports = fibonacci;
