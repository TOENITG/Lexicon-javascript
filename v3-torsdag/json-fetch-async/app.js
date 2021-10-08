// Koppla JS till html
const todoList = document.querySelector("#todos");

//todo: Hämta en viss todo från api.
//todo: Sätt en style på hemsidan.

// Hänta hela listan
const fetchData = async () => {
  // Fetch returns a promise, så vi måste vänta på resultatet.
  const res = await fetch(`http://jsonplaceholder.typicode.com/todos`);
  // res är en http-response och vi behöver göra om den till json.
  const result = await res.json();
  renderData(result);
};
// Hämta en item
const fetchTodoData = async (itemId) => {
  // Fetch returns a promise, så vi måste vänta på resultatet.
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/todos/${itemId}`
  );
  // res är en http-response och vi behöver göra om den till json.
  const result = await res.json();
  renderDataDetail(result);
};

// Renderar data till hemsidan.
const renderData = (data) => {
  // Data är en array
  data.map((value) => {
    const li = document.createElement("li");
    li.innerHTML = `User id:<H1>${value.userId}</H1>Task:<p>${value.title}</p>,completed <small>${value.completed}</small>`;
    todoList.appendChild(li);
  });
};

const renderDataDetail = (value) => {
  const li = document.createElement("li");
  li.innerHTML = `User id:<H1>${value.userId}</H1>Task:<p>${value.title}</p>,completed <small>${value.completed}</small>`;
  todoList.appendChild(li);
};

//fetchData();
fetchTodoData(10);
