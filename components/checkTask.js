const checkComplete = () =>{
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
};

const completeTask = (evento) =>{
    const element = evento.target;
    element.classList.toggle("fas");
    element.classList.toggle("far");
    element.classList.toggle("CompleteIcon");
    //element.classList.remove("fa-check-square");
};

export default checkComplete;