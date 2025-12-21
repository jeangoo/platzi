let $list = document.querySelector(".list");
const appendBtn = document.getElementById("append");
const todo = document.getElementById("todo");

function appendTodo() {
  if (todo.value) {
    $list.innerHTML += `<li>${todo.value} <button onclick="checkmark()">done</button></li>`;
    todo.value = "";
  }
}

function checkmark() {
  $list.addEventListener("click", function (event) {
    const li = event.target.closest("li");
    if (!li) return;

    li.classList.add("done");
  });
}

appendBtn.addEventListener("click", () => {
  appendTodo();
});
