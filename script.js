
document.addEventListener("DOMContentLoaded", () => {
  fetch("data/tasks.json")
    .then((response) => response.json())
    .then((tasks) => {
      const taskList = document.getElementById("taskList");
      const frame = document.getElementById("contentFrame");

      tasks.forEach((task) => {
        const btn = document.createElement("button");
        btn.textContent = task.title;
        btn.onclick = () => {
          frame.src = task.file;
        };
        taskList.appendChild(btn);
      });

      if (tasks.length > 0) {
        frame.src = tasks[0].file;
      }
    });
});
