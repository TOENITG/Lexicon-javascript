const clock = document.querySelector(".klocka");
const goHomeH1 = document.querySelector(".go-home");

const time = () => {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  if (hours === 17) {
    goHomeH1.innerHTML = "Time to go home!";
  }
  if (hours === 12) {
    goHomeH1.innerHTML = "Lunch!";
  }
  let minutes = currentTime.getMinutes();
  minutes < 10 ? (minutes = "0" + minutes) : null;
  let seconds = currentTime.getSeconds();
  seconds < 10 ? (seconds = "0" + seconds) : null;
  let time = `<strong>The time is ${hours}:${minutes}:${seconds}</strong>`;
  clock.innerHTML = time;
};

setInterval(() => {
  time();
}, 1000);
