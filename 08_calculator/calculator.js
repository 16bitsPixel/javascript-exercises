const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let result = 0;
  arr.forEach(num => result += num);
  return result;
};

const multiply = function() {
  // case no arguments
  if (arguments.length == 0) return 0;
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
};

const power = function(a, b) {
  let result = a;
	for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(num) {
	if (num == 0) {
    return 1;
  }
  else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
