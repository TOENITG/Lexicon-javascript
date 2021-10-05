// 1.
for (let i = 0; i < 1001; i++) {
  console.log(i);
}

// 2.
for (let i = 100; i >= 0; i--) {
  console.log(i);
}

// 3.
let fruits = ["apple", "orange", "pear", "kiwi", "pineapple"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 4.
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}: ${fruits[i]}`);
}

// 6.
let things = ["hammer", "nails", "ruler", "screwdriver", "screws", "saw"];

for (const thing of things) {
  console.log(thing);
}

// 7.
console.log("foreach");
things.forEach((thing) => {
  console.log(thing);
});

// 8.
console.log("foreach");
things.forEach((thing, index) => {
  console.log(`${index}: ${thing}`);
});

// 9.
// Skapa en while-loop som kör 1000 varv. `console.log()` ut varje varv.

console.log("while-loop");
let i = 0;
while (i < 1000) {
  console.log(i);
  i++;
}

// 10. Generera en _kortlek_ med 52 kort där varje kort innehåller en färg ( suite ) och ett värde mellan 2 och 14 ( ess ).
//  Ex. [..., 'hjärter 8', 'hjärter 9', ...]
let deck = [];
let colors = ["spade", "heart", "diamond", "clubs"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "Ace"];
colors.forEach((color) => {
  values.forEach((value) => {
    deck.push(`${value} of ${color}`);
  });
});

console.log(deck);

// 11. Loopa ut samtliga vänners favoritfrukter med en `console.log()`.
let friends = [
  {
    name: "Sixten",
    likes: ["bananas", "strawberries", "blueberries"],
  },
  {
    name: "Khalid",
    likes: ["papaya", "pear", "pineapple"],
  },
  {
    name: "Lisa",
    likes: ["raspberries", "watermelon", "apple"],
  },
];

friends.forEach((friend) => {
  console.log(`Friend ${friend.name} has theese likes: `);
  friend.likes.forEach((fruit) => console.log(fruit));
});
