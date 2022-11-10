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
    //to delete the input after we click (remove data from input)
    todoInput.value=''
    //create button div
    const buttonDiv= document.createElement("div");
    buttonDiv.classList.add('todo-icons')
    todoDiv.appendChild(buttonDiv);

    //add check and delete buttons
    const checkBTN=document.createElement("button")
    checkBTN.innerHTML=`<i class="fa-solid fa-check " style="background-color: white; border-radius: 50%"></i>`;
    checkBTN.classList.add('icon_check')
    buttonDiv.appendChild(checkBTN)
    const deleteBTN=document.createElement("button")
    deleteBTN.innerHTML=`<i class="fa-solid fa-trash"></i>`
    deleteBTN.classList.add('icon_trash')
    buttonDiv.appendChild(deleteBTN)

    todoResult.appendChild(todoDiv)
}

//we wanna make the buttons check and delete able to work(delete when we click delete and be complieted when we click check)
function toggleToDo(e){
    const item = e.target //to know on which icon we clicked
    if (item.classList[0] == 'icon_check' ){ //if we clicked on check
        //so if we clicked on check so we have togo to todo-item (our input) and marke it as completed
        const btn_div= item.parentElement.parentElement.parentElement//go to the first div the grandperant div
        btn_div.classList.toggle('completed-todo'); //toggle is to undo what we clicked and to click it again if we want
    }
    if (item.classList[0] == 'icon_trash'){ //if we clicked on delete
        //so if we clicked on delete so we have togo to todo-item (our input) and  deleted it
        const btn_div= item.parentElement.parentElement.parentElement//go to the first div the grandperant div
        btn_div.classList.add('remove-todo')
    }
}
todoButton.addEventListener('click', addTodo)
todoResult.addEventListener('click', toggleToDo) //if we click on any of the buttons on the result go tp the function toggleToDo