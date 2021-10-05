const person = {
  name: "Tobias",
  age: 33,
  sayHello: function () {
    alert(`Hello ${this.name}`);
  },
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  check: function (x, y) {
    if (x === 5) {
      console.log("The number is 5.");
      return;
    }
    return x + y;
  },
};
console.log(person.check(1, 2));
console.log(person.check(5, 2));
//console.log(person);

person.name = "Pelle";
person.age = 99;
console.log(person);
const addition = person.add(12, 13);
console.log(addition);

console.log(person.subtract(100, 1));
