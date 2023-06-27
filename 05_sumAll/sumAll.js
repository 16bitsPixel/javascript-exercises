const sumAll = function(n, m) {
    // edge cases
    if (n < 0 || m < 0 || typeof n != "number" || typeof m != "number") return "ERROR";

    let sum = 0;

    // reorders n and m to be smaller first
    if (m < n) {
        let temp = n;
        n = m;
        m = temp;
    }
    
    // adds up from n to m
    for (let i = n; i <= m; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
