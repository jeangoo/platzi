const list = document.querySelector("ul")
const listItems = list.getElementsByTagName("li")
const addBtn = document.getElementById("addbtn")
const delBtn = document.getElementById("deletebtn")


addBtn.addEventListener('click', () => {
    task = prompt("Enter the task: ")
    if (task !== null && task.trim() !== "") {
        list.innerHTML += `<li>${task}</li>`
    } else {
        alert("Error trying to add the task.")
    }
})

delBtn.addEventListener('click', () => {
    deletedTask = prompt("Enter the task do you want to delete: ")
    for(let i = 0; i < listItems.length; i ++)
     if (deletedTask === listItems[i].textContent) {
        listItems[i].remove()
    } else {
        alert("Error trying to delete the task.")
    }
})
