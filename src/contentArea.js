//create the content area of the todo app
import { Todo } from "./todo";

//create empty array of todo tasks
const todoArray = [];
//add sample tasks to the array
todoArray.push(new Todo("Dynamically-added tasky!", "Dynamically tidy up the house", "2023-11-05", "High", "X", getTaskId()));



const createContentArea = () => {
    //alert("hi from content area!");
    //const newTodo = new Todo("Dynamically-added tasky!", "Dynamically tidy up the house", "2023-11-05", "High", "");
    createTodoInGrid(todoArray[0]);
}


const createTodoInGrid = (todoItem) => {
    //function to take in a Todo class and create a grid row to represent it
    const gridContent = document.getElementById("content");
    //create title
    const todoTitle = document.createElement("div");
    todoTitle.classList.add("todo-field", "title");
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
    //create delete icon div
    const todoDelete = document.createElement("div");
    todoDelete.classList.add("todo-field", "delete-item");
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
    console.log("donkey");
    //return todoArray.length;
    return "Donkey";
}

export default createContentArea;