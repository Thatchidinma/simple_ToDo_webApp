//scroll to the bottom for bugs to be fixed

const newTask = document.getElementById('newTask')
const checkBox = document.getElementById('checkbox')
const storeTask = document.getElementById("Tasks")
const errMsg = document.getElementById('errMsg')


let checked = false

// localStorage.removeItem("data");

// function to save data on the page, call the saveData inside every function 
function saveData() {
    localStorage.setItem('data', storeTask.innerHTML)
}

storeTask.innerHTML = localStorage.getItem('data')


function addToTask (e) {
    //check if enter key or checkbox is clicked 
    if (e.key === 'Enter' || checkBox.checked == true) {
        //check if input field is empty or not
        if(newTask.value === ""){
            //if empty show error message
            errMsg.classList.remove('hidden')
            //uncheck the checkbox
            checkBox.checked = false
        }else{
            //else hide error message
            errMsg.classList.add('hidden') 

            //create list element and assign it to  variable
            let list = document.createElement("li");

            //add id to list variable(list element)
            list.setAttribute("Id", "listItem")

            //add classes to list variable(list element)
            list.setAttribute("class", "flex bg-gray-blue p-4  border-b border-gray-700 before:h-5 before:w-5 before:my-auto before:rounded-full before:bg-unchecked before:bg-cover before:bg-center before:mr-4") 

            list.innerHTML =  newTask.value.trim()

            //add list as a child of elemnet with id of Tasks
            document.getElementById("Tasks").prepend(list);

            //clear input
            newTask.value = ""
            //uncheck checkbox
            checkBox.checked = false
            
            saveData()
        }
    }
}


newTask.addEventListener('keypress', addToTask )
checkBox.addEventListener('click', addToTask)





    //function to check and uncheck task
    //first add an event listener to check when the list is clicked
    storeTask.addEventListener("click", function(e){
        //if where clicked is an <li> tag
        if(e.target.tagName === "LI"){
            //change the checked variable to the opposite of value
            checked = !checked
            // console.log(checked)

            //if checked or unchecked add and remove some classes
            if(checked){
                e.target.classList.remove('before:bg-unchecked', 'no-underline')
                e.target.classList.add('before:bg-checked', 'line-through', 'text-gray-700')
            }
            if(!checked){
                e.target.classList.remove('before:bg-checked', 'line-through', 'text-gray-700')
                e.target.classList.add('before:bg-unchecked', 'no-underline')
            }
            saveData()
        }
    })
    

    //function to remove finished task
    function removeTask(){
        //get children element of storeTask
        const collection = storeTask.children
    
        // loop through children
        for (let i = 0; i < collection.length; i++) {

            // if children class contains 'before:bg-checked' i.e the task is checked, remove the child
            if(JSON.stringify(collection[i].classList).includes('before:bg-checked')){
            collection[i].remove()
            }
          }
          saveData()
    }
    


    //pending bugs
    // 1. remove all checked task at once when the button is clicked, currently removes them in batches
    // 2. fix checking on click, currently doesnt all check on first click