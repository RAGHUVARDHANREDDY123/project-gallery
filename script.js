document.addEventListener("DOMContentLoaded", () => {
  let tasksData = [];
  const taskList = document.getElementById("taskList");
  const taskTitle = document.getElementById("taskTitle");
  const taskDesc = document.getElementById("taskDesc");
  const frame = document.getElementById("contentFrame");
  const searchInput = document.getElementById("searchInput");

  fetch("data/tasks.json")
    .then((res) => res.json())
    .then((tasks) => {
      tasksData = tasks;
      displayTasks(tasksData);
    });

  function displayTasks(tasks) {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const btn = document.createElement("button");
      btn.textContent = task.title;
      btn.onclick = () => {
        frame.src = task.file;
        taskTitle.textContent = task.title;
        taskDesc.textContent = task.description;
      };
      taskList.appendChild(btn);
    });
  }

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTasks = tasksData.filter(t =>
      t.title.toLowerCase().includes(searchTerm)
    );
    displayTasks(filteredTasks);
  });
});

