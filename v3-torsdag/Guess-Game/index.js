// Här skriver vi in ett nummer
const enterNumber = () => {
  return new Promise((resolve, reject) => {
    // resolve är det vi uppfyllde vår promise
    // reject är att vi inte uppfyllde vår promise
    // User enters number:
    const userNumber = Number(window.prompt("Enter a number between 1 and 6"));
    // random number
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    if (isNaN(userNumber)) {
      reject(new Error("Wromg input, try again!"));
    }

    // If userNumber === randomNumber, give two points.
    if (userNumber === randomNumber) {
      resolve({
        points: 2,
        randomNumber,
      });
    }
    // if userNumbers is dirrfernt by 1 point:
    else if (
      userNumber === randomNumber - 1 ||
      userNumber === randomNumber + 1
    ) {
      resolve({
        points: 1,
        randomNumber,
      });
    } else {
      resolve({
        points: 0,
        randomNumber,
      });
    }
  });
};

// fråga omspelaren vill spela igen.
const continueGame = () => {
  return new Promise((resolve) => {
    if (window.confirm("Do you want to continue?")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

// Kontrollerar gissningen.
const handleGuess = async () => {
  try {
    // kolla gissningen och om spelaren vill fortsätta

    // här väntar vi på input fråna nvändare.
    const result = await enterNumber();
    alert(`Dice ${result.randomNumber} you got ${result.points} points.`);

    // om man vill spela igen.
    const isContining = await continueGame();
    if (isContining) {
      await handleGuess();
    } else {
      alert("End of the line dufus!");
    }
  } catch (error) {
    // visa upp en error om något gick fel.
    alert(error);
  }
};

handleGuess();
