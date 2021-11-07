const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");
const calc = require("./calc");

app.use(morgan("dev"));

app.use(express.static("public"));
// Tom server för tillfället

// console.log(calc.methods.add(4, 5));

// /calc/add/6/7 => 6+7
app.get("/calc/:method/:number1/:number2", (req, res) => {
  console.log(req.params);
  number1 = parseInt(req.params.number1);
  number2 = parseInt(req.params.number2);
  let answer = 0;
  // Nu ska vi se om det går att vara helt dynamisk... :D
  switch (req.params.method) {
    case "add":
      answer = calc.methods.add(number1, number2);
      break;
    case "sub":
      answer = calc.methods.sub(number1, number2);
      break;
    case "mul":
      answer = calc.methods.mul(number1, number2);
      break;
    case "div":
      if (number2 !== 0) {
        answer = calc.methods.div(number1, number2);
      } else {
        res.status(200).send({ answer: null, success: false });
      }
      break;
    default:
      return res.status(200).send({ answer: null, success: false });
  }
  res.json({ answer: answer, success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
