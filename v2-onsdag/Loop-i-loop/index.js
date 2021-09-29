const shoppingList = ["Coffee", "Tea", "Milk", "Oatmeal"];

const list = document.querySelector("#list");

for (let i = 0; i < shoppingList.length; i++) {
  const elementInList = shoppingList[i];
  let li = document.createElement("li");
  li.innerText = elementInList;
  list.appendChild(li);
}
