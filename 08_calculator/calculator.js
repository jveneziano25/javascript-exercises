const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((total, current) => total + current, 0);

const multiply = (arr) => arr.reduce((product, current) => product * current);

const power = (a, b) => Math.pow(a, b);

const factorial = function(num) {
	if (num === 0) return 1;
  let product = 1;
    for(let i = num; i > 0; i--){
      product *= i;
    }
  return product;
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
