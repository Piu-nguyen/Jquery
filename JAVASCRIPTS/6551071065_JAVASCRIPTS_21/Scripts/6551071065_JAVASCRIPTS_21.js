document.getElementById("add-btn").addEventListener("click", function () {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.className = "pending";
    li.textContent = text;

    const removeBtn = document.createElement("span");
    removeBtn.textContent = "X";
    removeBtn.className = "remove";
    li.appendChild(removeBtn);

    document.getElementById("todo-list").appendChild(li);
    input.value = "";
  }
});

document.getElementById("todo-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
    e.target.classList.toggle("pending");
  }
});