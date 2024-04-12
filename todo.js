let todoList = [
  { item: "I am eating", dueDate: "4/10/2024" },
  {
    item: "have gone to office",
    dueDate: "12/03/2023",
  },

  {
    item: "making food for you",
    dueDate: "15/02/2024",
  },
];

displayItems();
function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    //let item = todoList[i].item;
    //let dueDate = todoList[i].dueDate;   or we can write like
    let { item, dueDate } = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span> 
    <button class="btn-delete" onclick="todoList.splice(${i},1); displayItems(); ">Delete</button>`;
  }
  containerElement.innerHTML = newHtml;
}
