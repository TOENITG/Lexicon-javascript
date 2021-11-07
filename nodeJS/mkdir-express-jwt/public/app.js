const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginDetails = {
    // Detta är vad användaren skriver in i form
    username: username.value,
    password: password.value,
  };

  fetch("/secure/login", {
    // Gör ett anrop till API:et
    method: "POST", // vilen typ av anrop
    headers: {
      // vad för sorts information typ vi använder.
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDetails), // är vad vi skickar till backend
  })
    .then((res) => res.json()) // konvertaerat vårt anrop till JSON
    .then((response) => {
      // använd den informationvi fick från backend
      if (response.status === "success") {
        // allt inom 2:a then kommmer från backend
        localStorage.setItem("token", response.token); // sparar i hemsidan token
        location.href = response.redirect; // skickar användaren till admin-sidan
      } else {
        //  om felaktiga credentials
        alert("Input correct credentials."); // Gör detta! <---
      }
    })
    .catch((err) => {
      // om nå't gick fel.
      console.log(err);
      alert("Input correct credentials."); // Gör detta! <---
    });
});
