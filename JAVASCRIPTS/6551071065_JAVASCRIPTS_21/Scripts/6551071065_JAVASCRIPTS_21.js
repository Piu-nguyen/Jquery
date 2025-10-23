document.getElementById("add-btn").addEventListener("click", function () {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text !== "") {
    addTodoItem(text);
    input.value = "";
  }
});

function addTodoItem(text) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const span = document.createElement("span");
  span.textContent = text;

  const actions = document.createElement("div");
  actions.className = "todo-actions";

  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = "✔";
  checkBtn.className = "check-btn";
  checkBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "✖";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(checkBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  document.getElementById("todo-list").appendChild(li);
}