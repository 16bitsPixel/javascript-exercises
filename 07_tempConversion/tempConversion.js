const convertToCelsius = function(farenheit) {
  // (x − 32) * 5/9
  return Math.round((farenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  // (x * 9/5 + 32)
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
