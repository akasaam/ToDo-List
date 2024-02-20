// validete the input
document.querySelector("#push").onclick = function () {
  if (document.querySelector("#new-task input").value.length == 0) {
    alert("You have to write something!");
  }
  // add the new task to the list
  else {
    document.querySelector("#task").innerHTML += `
    <div class="tasks">
      <span id="taskname">
        ${document.querySelector("#new-task input").value}
      </span>
      <button class="delete"><i class="bi bi-x-circle"></i></button>
    </div>
    `;
    // clear the input
    var currentTasks = document.querySelectorAll(".delete");
    for (var i = 0; i < currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        this.parentElement.remove();
      };
    }
    // cross out the task
    var tasks = document.querySelectorAll(".tasks");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("checked");
      };
    }
    // clear the input after each entry
    document.querySelector("#new-task input").value = "";
  }
};
