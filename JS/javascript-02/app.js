const list = document.querySelector("ul");
const listItems = list.getElementsByTagName("li");
const addBtn = document.getElementById("addbtn");
// const delBtn = document.querySelector(".deleteBtn")
const taskInput = document.getElementById("taskInput");
const toggleBtn = document.querySelector(".toggle");
const checkbox = document.querySelector(".checkbox");
const article = document.querySelector('.container')
const title = document.querySelector("h1");
const liBackground = document.querySelector("li")
const taskTitle = document.querySelector(".task-and-input")
getTaskInLocalStorage()

addBtn.addEventListener("click", () => {
  const task = taskInput.value;
  if (task !== null && task.trim() !== "") {
    list.innerHTML += `<li>
          <div class="task-and-input">
            <div class="checkbox"></div>
            ${task}
          </div>
          <button class="editBtn">Edit</button>
          <button class="deleteBtn">Delete</button>
        </li>`;
        saveTaskInLocalStorage(task)
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
    const  li = event.target.parentElement;
    const currentTask = li.firstChild.textContent.trim();
    const editedTask = prompt(`Edit the task ${currentTask}`);
    if (editedTask !== null && editedTask.trim() !== "") {
      li.innerHTML = `
          <div class="task-and-input">
            <div class="checkbox"></div>
            ${editedTask}
          </div>
          <button class="editBtn">Edit</button>
          <button class="deleteBtn">Delete</button>
        `;
        updateLocalStorage()
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
  title.classList.toggle("title-dark");
  liBackground.classList.toggle("li-dark");
  taskTitle.classList.toggle("task-dark");
});

checkbox.addEventListener("click", () => {
  checkbox.classList.toggle("checked");
});

function saveTaskInLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")
  tasks.push(task)
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function getTaskInLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")
  tasks.forEach((task) => {
    list.innerHTML += `<li>
          <div class="task-and-input">
            <div class="checkbox"></div>
            ${task}
          </div>
          <button class="editBtn">Edit</button>
          <button class="deleteBtn">Delete</button>
        </li>`;
  })
}

function updateLocalStorage() {
  const tasks = Array.from(list.querySelectorAll("li")).map((li) => li.firstChild.textContent);
  console.log(tasks)
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

// localStorage.setItem("name", "Jean")
console.log(localStorage.getItem("name"))