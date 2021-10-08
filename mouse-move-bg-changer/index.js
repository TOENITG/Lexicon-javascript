// DRY
const body = document.body;
const value = document.querySelector(".value");

// två referenspunkter
let x = 0;
let y = 0;

// Event  listener to mouse move.
body.addEventListener("mousemove", (ev) => {
  // x oxh y är koodinater på skärmen.
  x = (ev.clientX / window.visualViewport.width) * 255;
  y = (ev.clientY / window.visualViewport.height) * 255;

  const random = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${x},${y},${random})`;
  value.innerHTML = `<H1>The color value of the site is ${body.style.backgroundColor}</h1>`;
});
