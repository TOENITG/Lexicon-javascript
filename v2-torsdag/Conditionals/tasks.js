// Flow control bootcamp
// Övningsbatteri för att öva på if, else if, switchar och ternarys.
// IF
// bigger
let a = 10;
let b = 20;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is not greater than b");
}

// Ta med hjälp av en if-sats reda på om talet a är större än b.
// equals or not


a = "apple";
b = "pear";
// Ta med hjälp av en if-sats reda på om a är lika b.
if (a === b) console.log("a is the same as b");
// Ta med hjälp av en if-sats reda på om a inte är lika b.
if (a !== b) console.log("a is not the same as b");

// ELSE IF
// Biggest Gör en funktion som heter getBiggest(a,b) som tar emot två stycken numeriska värden. Funktionen ska utvärdera vilket tal som är störst och returnera det.
const getBiggest = (first, second) => {
  if (first > second) {
    return first;
  } else if (second > first) {
    return second;
  } else return first;
};

// Even or not Gör en funktion som tar ett number som argument. Ta reda på om talet är jämt eller udda.
const isEven = (number) => {
  return number % 2 === 0 ? true : false;
};
console.log(isEven(42));

// Lisebergsvakten Gör en funktion som ska sitta i en sensor på lisebergs åkattration Helix. För att få åka helix ska man vara minst 150cm lång. Funktionen ska returnera true eller false.
const tallEnoughForHelix = (height) => {
  return height >= 150 ? true : false;
};

// Lisebergsvakten 2 På Liseberg finns 4 olika åkband; small, medium, large och platinum. För att få åka Balder krävs large och platinum. Gör en funktion som tar argumentent ridePass och returnera true eller false.
const rideBalder = (ridePass) => {
  return ridePass === "large" || ridePass === "platinum" ? true : false;
};

console.log(rideBalder("platinum"));

// BMI kalkylator BMI ( Body Mass Index ) sägs vara ett hälsomått som visar på under eller övervikt. Det bör dock tas med en nypa salt då vi alla människor är unika ( och awesome! ).
// Formeln för BMI är följande:
// (kroppsvikten i kg / kroppslängden i meter) * 2
// Resultat från formeln delas in i olika viktklasser.
// BMI
// Klassificering
// < 18,5
// Undervikt
// 18,5 – 25
// Normalvikt
// 25 – 30
// Övervikt
// 30 >
// Fetma
// Skriv en funktion som tar en persons längd i cm samt vikt i kg och returnerar en BMI-klassificering.
const BMICalculator = (length, weight) => {
  const BMI = weight / ((length / 100) ^ 2);
  if (BMI > 30) return "Fetma";
  if (BMI >= 25) return "Övervikt";
  if (BMI >= 18.5) return "Normalvikt";
  return "Undervikt";
};

console.log(BMICalculator(178, 80));
console.log(BMICalculator(178, 70));
console.log(BMICalculator(178, 60));

// Switch
// Weekdays Gör en funktion som tar ett nummer ( 1-7 ) och returnerar vilken veckodag numret motsvarar. Ex. 1 = måndag, 3 = untzdag. Om numret inte motsvarar någon veckodag skall funktionen returnera false.
const weekday = (dayNumber) => {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";

    default:
      return false;
  }
};

console.log(weekday(3));

// Month Gör en funktion som tar ett nummer ( 1-12 ) och returnerar vilken månad numret motsvarar. Ex. 1 = januari, 10 = oktober. Om numret inte motsvarar någon månad skall funktionen returnera false.

const month = (monthNumber) => {
  switch (monthNumber) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";

    default:
      return false;
  }
};

console.log(month(4));
console.log(month(13));

// Ternary
a = "hola bandola!";
b = "plipp, plopp, lolipop!";
// Skriv en ternary som tar reda på om sträng a är längre än b. Returnera yes! om det stämmer, och No! om det inte stämmer.

const isLonger = (first, second) => {
  return first.length > second.length ? true : false;
};

console.log(isLonger(a, b));
