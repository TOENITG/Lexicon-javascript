const calculator = document.querySelector("#calculator");
const answer = document.querySelector("#answer");

calculator.addEventListener("submit", (e) => {
  e.preventDefault();
  answer.innerHTML = "";
  const formData = new FormData(e.target);
  let num1 = formData.get("num1");
  let num2 = formData.get("num2");
  let method = formData.get("method");

  try {
    fetch(`/calc/${method}/${num1}/${num2}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          answer.innerHTML = data.answer;
        } else answer.innerHTML = "Error";
      });
  } catch (err) {
    console.log(err);
    console.log(err);
  }
});
