let userWeapon = undefined;
let computerWeapon = undefined;
const winner = document.querySelector("#winner");
const resultat = document.querySelector("#resultatet");

const stenKnapp = document.querySelector("#rock");
const saxKnapp = document.querySelector("#scissor");
const papperKnapp = document.querySelector("#paper");

// stenknappeventlistener

stenKnapp.addEventListener("click", () => {
  userWeapon = "sten";
  getWinner();
});

saxKnapp.addEventListener("click", () => {
  userWeapon = "sax";
  getWinner();
});

papperKnapp.addEventListener("click", () => {
  userWeapon = "papper";
  getWinner();
});

// Beräkna vem som vinner spelet...
const getWinner = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  let winnerRole = "It's a tie!";

  switch (computerChoice) {
    case 0:
      computerWeapon = "sten";
      break;
    case 1:
      computerWeapon = "sax";
      break;
    case 2:
      computerWeapon = "papper";
      break;
  }
  resultat.innerHTML = `Ditt vapen är ${userWeapon} och datorns vapen är ${computerWeapon}`;
  userWeapon === "sten" && computerWeapon === "sax"
    ? (winnerRole = "User wins!")
    : null;
  userWeapon === "sax" && computerWeapon === "papper"
    ? (winnerRole = "User wins!")
    : null;
  userWeapon === "papper" && computerWeapon === "sten"
    ? (winnerRole = "User wins!")
    : null;
  userWeapon === "sax" && computerWeapon === "sten"
    ? (winnerRole = "Computer wins!")
    : null;
  userWeapon === "papper" && computerWeapon === "sax"
    ? (winnerRole = "Computer wins!")
    : null;
  userWeapon === "sten" && computerWeapon === "papper"
    ? (winnerRole = "Computer wins!")
    : null;
  winner.innerHTML = winnerRole;
};
