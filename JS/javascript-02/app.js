const list = document.querySelector("ul")
const listItems = list.getElementsByTagName("li")
const addBtn = document.getElementById("addbtn")
// const delBtn = document.querySelector(".deleteBtn")
const taskInput = document.querySelector("input")
const toggleBtn = document.querySelector(".toggle")


addBtn.addEventListener('click', () => {
    let task = taskInput.value
    if (task !== null && task.trim() !== "") {
        list.innerHTML += `<li>${task}  <button class="editBtn">Edit</button> <button class="deleteBtn">Delete</button> </li>`
        taskInput.value = "";
    } else {
        alert("Error trying to add the task.")
    }
})

list.addEventListener("click", (event) => {
    
    if (event.target.classList.contains('deleteBtn')) {
            event.target.parentElement.remove()
    }

    if (event.target.classList.contains('editBtn')) {
        let li = event.target.parentElement;
        let currentTask = li.firstChild.textContent.trim()
        let editedTask = prompt(`Edit the task ${currentTask}`) 
        if (editedTask !== null && editedTask.trim() !== "") {
            li.innerHTML = `${editedTask}  <button class="editBtn">Edit</button> <button class="deleteBtn">Delete</button>`
        } else {
            alert("Error trying to edit the task.")
        }
    }
})

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addBtn.click()
    }
})