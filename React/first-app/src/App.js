import "./main.css";

function App() {
  const add = (number1, number2) => {
    return number1 + number2;
  };

  const buttonDetails = {
    text: "Push me!",
  };
  return (
    <header className="en-header">
      <h1>Hello world</h1>
      <p>3 + 7 = {add(3, 7)}</p>
      <button>{buttonDetails.text}</button>
    </header>
  );
}

export default App;
