function add(a, b) {
  return a + b;
}
console.log(add(a, b_));

function substract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b == 0) {
    throw new Error("Division by zero not allowed!");
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  substract,
  divide,
  multiply,
};
