const list = document.querySelector("ul");
const listItems = list.getElementsByTagName("li");
const addBtn = document.getElementById("addbtn");
// const delBtn = document.querySelector(".deleteBtn")
const taskInput = document.querySelector("input");
const toggleBtn = document.querySelector(".toggle");
const checkbox = document.querySelector(".checkbox");
const article = document.querySelector('.container')
const title = document.querySelector("h1");
const liBackground = document.querySelector("li")

addBtn.addEventListener("click", () => {
  let task = taskInput.value;
  if (task !== null && task.trim() !== "") {
    list.innerHTML += `<li>
          <div class="task-and-input">
            <div class="checkbox"></div>
            ${task}
          </div>
          <button class="editBtn">Edit</button>
          <button class="deleteBtn">Delete</button>
        </li>`;
    taskInput.value = "";
  } else {
    alert("Error trying to add the task.");
  }
});

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteBtn")) {
    event.target.parentElement.remove();
  }

  if (event.target.classList.contains("editBtn")) {
    let li = event.target.parentElement;
    let currentTask = li.firstChild.textContent.trim();
    let editedTask = prompt(`Edit the task ${currentTask}`);
    if (editedTask !== null && editedTask.trim() !== "") {
      li.innerHTML = `
          <div class="task-and-input">
            <div class="checkbox"></div>
            ${editedTask}
          </div>
          <button class="editBtn">Edit</button>
          <button class="deleteBtn">Delete</button>
        `;
    } else {
      alert("Error trying to edit the task.");
    }
  }
});

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("body-dark");
  article.classList.toggle("article-dark");
  title.classList.toggle("title-dark")
  liBackground.classList.toggle("li-dark")
});

checkbox.addEventListener("click", () => {
  checkbox.classList.toggle("checked");
});
