//Get the form element(grab the form from Html)
let form = document.querySelector("form");

// Add an addEventListener to the form submission event
form.addEventListener("submit", (e) => {
    //prevent the default form submission behavior
    e.preventDefault()
})

//Get the To-do task from the form
const task = e.target.taskInput.value

//
