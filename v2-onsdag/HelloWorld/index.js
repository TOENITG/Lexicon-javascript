document.write("<h1>Hello World!</h1>");

/*for (let i = 0; i < 10; i++) {
  document.write(`<p> Count number: ${i}</p>`);
  console.log("i is: "+i);
}*/

const saker = ["lampa", "stol", "pengar", "dator"];
saker.forEach((element) => {
  console.log(element);
  document.write(`<p>${element}</p>`)
});

for (let i = 0; i < saker.length; i++) {
  console.log(`Mina saker är: ${saker[i]}`);
}
