// When the modal function is passed a todo item class, allow the user to edit it and return the changed class
// When no class is passed, allow the user to create a new todo item, and return that as a class to the calling function
// (Sounds so simple!! ;-)   )

const openModalWindow = (editTodo) => {
    //display the model and allow it to be closed
    const modal = document.getElementById("inputModal");
    modal.style.display = "block";
    const span = document.getElementsByClassName("close")[0];
    const modalTitle = document.querySelector(".modal-header>h2");
    const modalContent = document.querySelector(".modal-content>p");
    const modalFooter = document.querySelector(".modal-footer>h3"); 

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    }

    //check to see if we're creating a new todo, or editing an existing one
    if (editTodo === undefined) {
        //create a new item
        console.log("NEW");
        modalTitle.textContent = "Enter new todo details";
    } else {
        //edit the item passed in as the parameter
        console.log("EDIT");
        modalTitle.textContent = "Edit todo details";
        console.log(editTodo);
    }

}

export default openModalWindow;