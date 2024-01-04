let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
    if (taskInput.value == "") {
        alert("Please enter a task.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value + "<button onclick='removeTask(this)'>Remove</button>";
        taskList.appendChild(li);
        taskInput.value ="";
    }
}

function removeTask(button) {
    button.parentNode.remove();
}

taskInput
   .addEventListener("keyup", function (event) {
    if (event.keyCode == "13") {
        event.preventDefault();
        addTask();
        }
    });