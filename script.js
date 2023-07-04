//Seleccionar elmentos del árbol de DOM

//Saber cuando el usuario le da click al botón
const btnCreate =  document.querySelector("[data-form-btn]");
const inputText = document.querySelector("[data-form-input]");
const createTask = (evento) =>{
    evento.preventDefault(); //EVENTO PARA QUE NO SE REFRESQUE LA PÁGINA
    console.log(inputText.value);
}

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



