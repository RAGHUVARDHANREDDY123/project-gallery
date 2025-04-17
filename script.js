const taskList = document.getElementById("taskList");
const contentFrame = document.getElementById("contentFrame");

fetch("data/tasks.json")
  .then(response => response.json())
  .then(tasks => {
    tasks.forEach(task => {
      const button = document.createElement("button");
      button.textContent = task.name;
      button.onclick = () => {
        contentFrame.src = task.url;
      };
      taskList.appendChild(button);
    });
  })
  .catch(error => {
    taskList.innerHTML = "Error loading tasks.";
    console.error("tasks.json not loaded", error);
  });
