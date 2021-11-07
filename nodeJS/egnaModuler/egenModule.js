// Say name!
const sayName = (name) => {
  return `Tja ${name}, hur mår du idag?`;
};

// Show Age
const showAge = (age) => {
  return `You are ${age} years old`;
};

// Calculate numbers
const calc = (num1, num2) => {
  return num1 + num2;
};

// Calculate average
const average = (num1, num2) => {
  return (num1 + num2) / 2;
};

exports.name = {
  sayName,
  showAge,
  calc,
  average,
};
