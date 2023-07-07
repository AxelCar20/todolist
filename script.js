
import checkComplete  from "./components/checkTask.js";
import removeTask from "./components/deleteTask.js";

//SE USA EL MÉTODO IMMEDIATELY INVOKEDE FUNTION EXPRESSION IIFE
( () => {
const btnCreate =  document.querySelector("[data-form-btn]");


const createTask = (evento) =>{
    evento.preventDefault(); //EVENTO PARA QUE NO SE REFRESQUE LA PÁGINA

    const inputText = document.querySelector("[data-form-input]");
    const value = inputText.value;

    const list = document.querySelector("[data-ul-task]");
    
    const task = document.createElement("li"); //SE RECIBE EL ELEMENTO QUE SE REQUIERE CREAR 
    task.classList.add("card");


    const taskContent = document.createElement("div");

    const tittleTask = document.createElement("span");
    tittleTask.classList.add("task");
    tittleTask.innerText = value;

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(tittleTask);

    task.appendChild(taskContent);
    task.appendChild(removeTask());
    list.appendChild(task);


    inputText.value = "";
};

btnCreate.addEventListener("click", createTask);

})();