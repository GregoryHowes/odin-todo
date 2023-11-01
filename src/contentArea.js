//create the content area of the todo app
import { Todo } from "./todo";

const createContentArea = () => {
    //alert("hi from content area!");
    const newTodo = new Todo("Clean up", "Tidy up the house", "2023-11-05", "High", "");
    console.log(newTodo);
}

export default createContentArea;