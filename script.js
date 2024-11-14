document.getElementById("submitButton").addEventListener("click", addTask);

function addTask(){
    const taskInput = document.getElementById('taskInput').value;
    if(taskInput){
        const newTask = document.createElement('li');

        newTask.innerText= taskInput;

        const taskList = document.getElementById('taskList');
        taskList.appendChild(newTask)
        
        const deleteButton = document.createElement("button");
        deleteButton.className="button";
        deleteButton.innerText="x";
        newTask.appendChild(deleteButton)
        deleteButton.addEventListener("click", () => taskList.removeChild(newTask));

        document.getElementById('taskInput').value=''
    }
}
