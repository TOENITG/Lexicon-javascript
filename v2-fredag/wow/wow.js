/*
Wow Uppgift 
Skriv en funktion som tar en siffra som parameter som användaren skriver in. 
Görs genom input funktionen – detta får ni undersöka. 
Om användaren inte skriver in en siffra, säg till dom att göra det. 
Den ska printa ut 1 till 100 till sidan. 

Om parametern är en nämnare av 3 och 5 skriv ut Fizz Buzz 

Om parametern är bara en nämnare av 3 skriv ut Fizz 

Om parametern är bara en nämnare av 5 skriv ut Buzz 
Varje sak som ni skriver ut ska ha en en class av antingen:
     variable om det är bara siffran, 
    both om den uppfyller kravet för steg 4, 
    fizz om den uppfyller krav från steg 5, 
    och buzz om den uppfyller kravet för steg 6. 
Ni får fritt fram att styla hur ni vill! 

Lycka tll! 
*/

const messageToScreen = (theMessage) => {
  document.getElementById("answer").innerHTML = theMessage;
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const getUserInput = () => {
  let input = prompt("Skriv in ett tal: ");
  while (!isNumeric(input)) input = prompt("Skriv in ett tal: ");
  return parseInt(input);
};

const print1To100 = () => {
  let result = "";
  for (let i = 1; i <= 100; i++) {
    let divBy5 = i % 5 === 0;
    let divBy3 = i % 3 === 0;
    let theClass = "varlable";
    let theMessage = i;
    if (divBy3 && !divBy5) {
      theClass = "fizz";
      theMessage = "Fizz";
    }
    if (divBy5 && !divBy3) {
      theClass = "buzz";
      theMessage = "Buzz";
    }
    if (divBy3 && divBy5) {
      theClass = "both";
      theMessage = "Fizz Buzz";
    }
    result += `<div class ="${theClass}">${theMessage}</div>`;
  }
  messageToScreen(result);
};

let input = getUserInput();

print1To100();
