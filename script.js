//Get the form element(grab the form from Html)
let form = document.querySelector("form");

// Add an addEventListener to the form submission event
form.addEventListener("submit", (e) => {
    //prevent the default form submission behavior
    e.preventDefault()
})

//Get the To-do task from the form
const task = e.target.taskInput.value

//send the to-do task to the server
// "/todo" is the url endpoint we are sending the reuest to.
fetch("/todo", {
    //POST method is used to send data to the server

    method:"POST",

    //Specifies the format of the data we are sending. In this case its json data 
    headers: {
        "Content-Type":"application/json",
    },
    //The data we are sending.Its converted to JSON string using JSON.stringify"
    //Send an object with a "task" property, which contains the task data collected from the form.
    
})
