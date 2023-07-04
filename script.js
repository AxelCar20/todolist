//Seleccionar elmentos del árbol de DOM

//Saber cuando el usuario le da click al botón
const btnCreate =  document.querySelector("[data-form-btn]");
const inputText = document.querySelector("[data-form-input]");
const createTask = (evento) =>{
    evento.preventDefault(); //EVENTO PARA QUE NO SE REFRESQUE LA PÁGINA
    const value = inputText.value;
    inputText.value = "";
    const list = document.querySelector("[data-ul-task]");
    const task = document.createElement("li"); //SE RECIBE EL ELEMENTO QUE SE REQUIERE CREAR 
    task.classList.add("card");
    //SE LLAMAN BACKTICKS 
    //SE CREAN TEMPLATES QUE JS PERMITE
    const content = `
                    <div>
                    <i class="far fa-check-square icon"></i>
                    <span class="task"> ${value} </span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`

    inputText.value = "";

    task.innerHTML = content;
    list.appendChild(task);
    //SE LE AGREGA CÓDIGO HTML

    console.log(value);
};
/*
<li class="card" data-li-task>      
</li>*/
            

console.log(btnCreate);

//PARA ESCUCHAR A NUESTRO EVENTO

//RECIBE COMO PARÁMETROS EL EVENTO Y LA ACCIÓN A EJECUTAR
/*
btnCreate.addEventListener("click", function(evento){
    evento.preventDefault(); //EVENTO PARA QUE NO SE REFRESQUE LA PÁGINA
    console.log(inputText.value);
});
*/

//ARROW FUNCTION -- FUNCIONES ANÓNIMAS

btnCreate.addEventListener("click", createTask);



