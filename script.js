const taskContainer = document.querySelector(".task_container");
console.log(taskContainer);



const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,
    ImageURL: document.getElementById("ImageURL").value ,
    tasktitle: document.getElementById("tasktitle").value,
    tasktype: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskDescription").value
  };
  console.log(taskData);
  const newCard =  `
   <div id={taskData.id} class="col-md col-lg-4">
           <div class="card">
             <div class="card-header d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
                <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
              </div>
              <img src=${taskData.ImageURL} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title fw-bold text-primary">${taskData.tasktitle}</h5>
                <p class="card-text">${taskData.taskDescription}</p>
                <a href="#" class="btn btn-primary">Go Somewhere</a>
              </div>
            </div>
          </div>
          `;
          taskContainer.insertAdjacentHTML("beforeend", newCard)
}
