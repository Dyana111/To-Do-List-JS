//query selector
const todoInput= document.querySelector(".todo-input")
const todoButton= document.querySelector(".todo-button")
const todoResult= document.querySelector(".todo-result")


function addTodo(e){
    e.preventDefault();
    // add todo-item div
    const todoDiv= document.createElement("div");
    todoDiv.classList.add('todo-item')

    //add h2 and add data in h3
    const newTodo= document.createElement("h2");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-title')
    todoDiv.appendChild(newTodo)

    //create button div
    const buttonDiv= document.createElement("div");
    todoDiv.appendChild(buttonDiv);

    //add check and delete buttons
    const checkBTN=document.createElement("button")
    checkBTN.innerText=`<i class="fa-solid fa-check " style="background-color: white; border-radius: 50%"></i>`;
    buttonDiv.appendChild(checkBTN)
    const deleteBTN=document.createElement("button")
    deleteBTN.innerText=`<i class="fa-solid fa-trash"></i>`
    buttonDiv.appendChild(deleteBTN)

    todoResult.appendChild(todoDiv)
}

todoButton.addEventListener('click', addTodo)