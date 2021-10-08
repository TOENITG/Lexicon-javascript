// Görenarraysominnehåller5stolikafrukteravdatatypenstring.
let fruits = ["apple", "banana", "lemon", "durian", "pineapple"];

// Görenarraysominnehåller3olikadatatyper,ex.       .
let exampleTwo = ["Tobias", 52, ["Elise", "Lucine"]];

let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
// console.log() hur många objekt arrayen ovan innehåller.
console.log(animals.length);

console.log(animals[0]);
console.log(animals[3]);
animals[1] = "tiger";

let a = [1, 2, 3];
let b = [4, 5, 6];
//  Läggihopovanståendearrayer.
let c = [...a, ...b];
console.log(c);

// Merga ner array bb på index 3 array aa .
let aa = [1, 2, 3, 7, 8, 9];
let bb = [4, 5, 6];
aa.splice(3, 0, ...b);

console.log(aa);

let arr = ["a", "b", "c"];
// 9. Klonaovanståendearray.

let arrB = arr.slice();
console.log(arrB);

/*
Methods
.push(), .unshift(), .pop(), .shift(), .splice(), .includes(), .indexOf(), .substring()
*/
fruits = ["kiwi", "apple", "pear"];
console.log(fruits);
//10 Läggtillenfruktislutetavarrayenovan.
fruits.push("banana");
console.log(fruits);
//11. Läggtillenfruktibörjanavarrayenovan.
fruits.unshift("pineapple");
console.log(fruits);
//12. Iarrayenovan,tabortsistafrukteniarrayen.
fruits.pop();
console.log(fruits);
//13. Iarrayenovan,tabortförstafrukteniarrayen.
fruits.shift();
console.log(fruits);
//14. Sätt in en frukt i arrayen ovan på index 1 .
fruits.splice(1, 0, "orange");
console.log(fruits);
//15. Sättintrefrukteriarrayenovanpåindex2.
fruits.splice(2, 0, "mango", "guava", "durian");
console.log(fruits);

let names = ["David", "Christoffer", "Johan", "Maja"];
console.log(names);

// 16. Iarrayenovan,tabortChristofferochJohan.
console.log(names.splice(1, 2));
console.log(names);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums);
// 17. Spegelvänd arrayen.
for (let i = 0; i < nums.length / 2; i++) {
  let temp = nums[i];
  nums[i] = nums[nums.length - 1 - i];
  nums[nums.length - 1 - i] = temp;
}
console.log(nums);

let str = "Supercalifragilisticexpialidocious";

//18. Kikaomsträngenovaninnehållerbokstavenn.
let posOfn = str.indexOf("n");
console.log(posOfn);
//19. Kikaomsträngenovaninnehållerbokstavenx.
let posOfx = str.indexOf("x");
console.log(posOfx);
//20. I ovanstående array, hitta vilket position första förekomsten av p har.
let posOfp = str.indexOf("p");
console.log(posOfp);

//21. I strängen ovan, plocka fram de 5 första tecknena.
let firstFive = str.substr(0, 5);
console.log(firstFive);
//22. I strängen ovan, plocka fram de 7 sista tecknena.
let lastSeven = str.substr(str.length - 7, 7);
console.log(lastSeven);

// .filter
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
// 23. Iarrayenovan,filteraframallanummeröver5.
// 24. Iarrayenovan,filteraframallanummerunder5.

let persons = [
  {
    name: "Felicia",
    age: 12,
  },
  {
    name: "Pelle",
    age: 20,
  },
  {
    name: "Peter",
    age: 59,
  },
  {
    name: "Anna",
    age: 32,
  },
  {
    name: "Jocke",
    age: 18,
  },
  {
    name: "Ella",
    age: 3,
  },
];

// 25. Skriv ut alla namn som är 18 år eller över från arrayen ovan.
// 26. Skriv ut alla namn som är under 18 år från arrayen ovan.
