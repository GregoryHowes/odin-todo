//Create the side bar of the todo app

const createSidebar = () => {

    //create heading elements
    const timeHeading = document.createElement("h2");
    timeHeading.textContent = "by time";
    const categoryHeading = document.createElement("h2");
    categoryHeading.textContent = "by category";

    const sidebarElement = document.getElementById("sidebar");
    console.log(sidebarElement === null);
    const sidebarContents = document.createElement("div");    
    //build the list of date-specific tasks

    const timeList = document.createElement("ul");
    const todayTasks = document.createElement("li");
    todayTasks.textContent = "Today";
    const thisWeekTasks = document.createElement("li");
    thisWeekTasks.textContent = "This Week";
    
    //add date-specific tasks
    timeList.appendChild(todayTasks);
    timeList.appendChild(thisWeekTasks);
    //add heading
    sidebarContents.appendChild(timeHeading);
    sidebarContents.appendChild(timeList);

    //build the list of projects
    const projectList = document.createElement("ul");
    const workProject = document.createElement("li");
    workProject.textContent = "Work";
    const familyProject = document.createElement("li");
    familyProject.textContent = "Family";
    const hobbyProject = document.createElement("li");
    hobbyProject.textContent = "Hobbies";
    projectList.appendChild(workProject);
    projectList.appendChild(familyProject);
    projectList.appendChild(hobbyProject);
    
    //add heading
    sidebarContents.appendChild(categoryHeading);
    sidebarContents.appendChild(projectList);

    //add the sidebar to the DOM
    sidebarElement.appendChild(sidebarContents);
}

export default createSidebar;