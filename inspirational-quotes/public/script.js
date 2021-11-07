// Koppla js till html
const quoteHeading = document.querySelector("#quote");

fetch("/quote")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    quoteHeading.innerHTML = data.quote;
  });
