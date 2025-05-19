// math.js
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Деление на ноль");
  }
  return a / b;
}

module.exports = { add, divide };