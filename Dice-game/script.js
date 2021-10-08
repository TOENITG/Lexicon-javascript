let throws = 0;
let currentGoal = 1;

const dice = {
  sides: 6,
  throw() {
    return Math.ceil(Math.random() * this.sides);
  },
};

document.querySelector("button").addEventListener("click", () => {
  // Throw Dice
  let result = dice.throw();

  // Show in UI

  document.querySelector("#dice").classList = "";
  document.querySelector("#dice").classList.add("dice", `dots-${result}`);

  throws++;
  document.querySelector("button").innerText = `Kasta (${throws})`;
  console.log(`You threw ${result}`);

  if (result === currentGoal && currentGoal < 6) {
    document.querySelector(`.dots-${result}`).classList.remove("faded");
    currentGoal++;
  } else if (result === currentGoal && currentGoal === 6) {
    document.querySelector(`.dots-${result}`).classList.remove("faded");
    console.log(`You rolled a ladder in ${throws} throws.`);
    setTimeout(() => {
      alert(`You rolled a ladder in ${throws} throws.`);
    }, 100);

    setTimeout(() => {
      const reset = confirm("Reset game? ");
      console.log("resetting game");
      currentGoal = 1;
      throws = 0;
      document.querySelectorAll(".dice").forEach((el) => {
        el.classList.add("faded");
      });
      document.querySelector("#dice").classList = "dice";
      document.querySelector("button").innerText = `Kasta`;
    }, 1500);
  }
});
