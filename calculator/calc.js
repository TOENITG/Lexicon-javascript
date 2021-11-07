// Calculator modules

const add = (num1, num2) => {
  return parseInt(num1) + parseInt(num2);
};

const sub = (num1, num2) => {
  return num1 - num2;
};

const mul = (num1, num2) => {
  return num1 * num2;
};

const div = (num1, num2) => {
  return num1 / num2;
};

exports.methods = {
  add,
  sub,
  mul,
  div,
};
