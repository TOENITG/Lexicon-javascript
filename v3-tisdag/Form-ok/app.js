// Koppla form till JS
const laForma = document.querySelector("#the-form");

laForma.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const okidoki = confirm("All ok?");
  console.log(okidoki);

  if (okidoki) {
    const name = prompt("What is your name?");
    alert(`Welcome ${name}`);
  } else {
    const reason = prompt("Why is it not so good?");
    alert(`My reason is: ${reason}`);
  }
});
