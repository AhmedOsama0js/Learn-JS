
let inp = document.querySelector("#task");
let add = document.querySelector("#add");
let contTasks = document.querySelector(".tasks");

let arrTask = [];
if (localStorage.getItem("tasks")) {
  arrTask = JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLocStor();
let idTask = 1;

add.onclick = function () {
  //check input
  if (inp.value) {
    addTaskToArray(inp.value);
    inp.value = "";
  }
};

contTasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("delBtn")) {
    delWithLocStor(e.target.closest(".nDiv").getAttribute("id"));
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("nDiv")) {
    toggleTaskWithe(e.target.closest(".nDiv").getAttribute("id"));
    e.target.classList.toggle("done");
  }
});

function addTaskToArray(TaskText) {
  // task data
  const task = {
    id: `ele=>${idTask++}`,
    title: TaskText,
    completed: false,
  };
  // push task to arr
  arrTask.push(task);
  // add task to page
  addEleToPage(arrTask);
  // add task to local storage
  addEleToLocStor(arrTask);
}

function addEleToPage(arrTask) {
  contTasks.innerHTML = "";
  arrTask.forEach((task) => {
    let nDiv = document.createElement("div");
    nDiv.className = "nDiv";
    if (task.completed) {
      nDiv.className = "nDiv done";
    }
    nDiv.setAttribute("id", task.id);
    nDiv.appendChild(document.createTextNode(task.title));
    let delBtn = document.createElement("span");
    delBtn.className = "delBtn";
    delBtn.appendChild(document.createTextNode("delete"));
    nDiv.appendChild(delBtn);
    contTasks.appendChild(nDiv);
  });
}

function addEleToLocStor(arrTask) {
  window.localStorage.setItem("tasks", JSON.stringify(arrTask));
}

function getDataFromLocStor() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let task = JSON.parse(data);
    addEleToPage(task);
  }
}

function delWithLocStor(taskTd) {
  arrTask = arrTask.filter((e) => e.id !== taskTd);
  addEleToLocStor(arrTask);
}

function toggleTaskWithe(taskId) {
  for (let i = 0; i < arrTask.length; i++) {
    if (arrTask[i].id == taskId) {
      arrTask[i].completed == false
        ? (arrTask[i].completed = true)
        : (arrTask[i].completed = false);
    }
  }
  addEleToLocStor(arrTask);
}
