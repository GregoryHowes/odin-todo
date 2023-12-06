//create the content area of the todo app
import { Todo } from "./todo";
import openModalWindow from "./modalWindow";
const todoArray = [];


function createToDoArray() {
    //create empty array of todo tasks

    //add sample tasks to the arrays
    todoArray.push(new Todo("Clean house!", "Do it sooner rather than later!", "2023-11-11", "High", "X", getTaskId()));
    todoArray.push(new Todo("Dynamically-added tasky!", "Dynamically tidy up the house", "2023-11-05", "High", "X", getTaskId()));
    todoArray.push(new Todo("Pay taxes", "Nobody will let you forget this one anyway!", "2024-03-31", "Medium", "X", getTaskId()));
}



const createEventListeners = () => {
    const editButtons = document.querySelectorAll(".edit-item");
    console.log("Edit button element list:");
    console.log(editButtons);
    editButtons.forEach((editButton) => {
        editButton.addEventListener("click", editTodoItem);
    })
    //document.addEventListener("click", editTodoItem);
}

//Edit the selected todo item, using the id of the element to access the appropriate
// element in the toDoArry array
function editTodoItem(item) {
    //console.log(item.srcElement.dataset.id);
    console.log(todoArray[item.srcElement.dataset.id]);

    //test if my edit in row idea will work, by changing background colour of selected todo item
    const thisTask = document.querySelectorAll('[data-id="' + item.srcElement.dataset.id + '"]');
    console.log(thisTask);
}



const createContentArea = () => {
    createToDoArray();
    todoArray.forEach((todoItem) => {
        createTodoInGrid(todoItem);
    });
    createEventListeners();
    openModalWindow();
}


const createTodoInGrid = (todoItem) => {
    //function to take in a Todo class and create a grid row to represent it
    const gridContent = document.getElementById("content");
    //create title
    const todoTitle = document.createElement("div");
    todoTitle.classList.add("todo-field", "title");
    todoTitle.dataset.id = todoItem.id;
    todoTitle.textContent = todoItem.title;
    //create description
    const todoDescription = document.createElement("div");
    todoDescription.classList.add("todo-field", "description");
    todoDescription.textContent = todoItem.description;
    //create due date
    const todoDueDate = document.createElement("div");
    todoDueDate.classList.add("todo-field", "due-date");
    todoDueDate.textContent = todoItem.dueDate;
    //create priotity
    const todoPriority = document.createElement("div");
    todoPriority.classList.add("todo-field", "priority");
    todoPriority.textContent = todoItem.priority;
    //create checklist
    const todoChecklist = document.createElement("div");
    todoChecklist.classList.add("todo-field", "checklist");
    todoChecklist.textContent = todoItem.checklist;
    //create edit icon div
    const todoEdit = document.createElement("div");
    todoEdit.classList.add("todo-field", "edit-item");
    todoEdit.dataset.id = todoItem.id;
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa", "fa-pencil");
    todoEdit.appendChild(editIcon);
    //create delete icon div
    const todoDelete = document.createElement("div");
    todoDelete.classList.add("todo-field", "delete-item");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa", "fa-trash");
    todoDelete.appendChild(deleteIcon);
    //create id column (hidden through css)
    const todoId = document.createElement("div");
    todoId.classList.add("todo-field" , "todo-id");
    todoId.textContent = todoItem.id;


    //add task items to DOM
    gridContent.appendChild(todoTitle);
    gridContent.appendChild(todoDescription);
    gridContent.appendChild(todoDueDate);
    gridContent.appendChild(todoPriority);
    gridContent.appendChild(todoChecklist);
    gridContent.appendChild(todoEdit);
    gridContent.appendChild(todoDelete);
    gridContent.appendChild(todoId);

    return(todoItem);
}

//return the length of the todo task array + 1 to create new id
function getTaskId() {
    return todoArray.length;
}

export default createContentArea;