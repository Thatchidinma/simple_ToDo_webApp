const newTask = document.getElementById('newTask')
const storeTask = document.getElementById("Tasks")
// const addTask = document.getElementById('list')
//const checkbox = document.getElementById('checkbox')
const errMsg = document.getElementById('errMsg')
// let list


let checked = false


// if(listPar !== undefined){
//     listPar.innerHTML = localStorage.getItem('value')
// }
// localStorage.removeItem("data");

function saveData() {
    localStorage.setItem('data', storeTask.innerHTML)
}

storeTask.innerHTML = localStorage.getItem('data')



newTask.addEventListener('keypress', function (e) {
    //check if enter key is clicked
    if (e.key === 'Enter') {
        //check if input field is empty or not
        if(newTask.value === ""){
            //if empty show error message
            errMsg.classList.remove('hidden') 
        }else{
            //else hide error message
            errMsg.classList.add('hidden') 

            //create list element and assign it to  variable
            let list = document.createElement("li");

            //add onclick event to list variable(list element)
       

            //add id to list variable(list element)
            list.setAttribute("Id", "listItem")

            //add classes to list variable(list element)
            list.setAttribute("class", "flex bg-gray-blue p-4  border-b border-gray-700 before:h-5 before:w-5 before:my-auto before:rounded-full before:bg-unchecked before:bg-cover before:bg-center before:mr-4") 

            list.innerHTML =  newTask.value.trim()

            //add list as a child of elemnet with id of Tasks
            document.getElementById("Tasks").prepend(list);

            //clear input
            newTask.value = ""

            saveData()
        }
    }
}
)



// function toggleCheck(){
//     checked = !checked
//     console.log(checked)
    
//     if(checked){
//         list.classList.remove('before:bg-unchecked', 'no-underline')
//         task.classList.add('before:bg-checked', 'line-through', 'text-gray-700')
//     }else{
//         list.classList.remove('before:bg-checked', 'line-through', 'text-gray-700')
//         list.classList.add('before:bg-unchecked', 'no-underline')
//     }
// }

    //const task = document.getElementById('listItem')

    storeTask.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            checked = !checked
            console.log(checked)

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
    

    function removeTasK(){
        if (storeTask.children.classList.includes("before:bg-checked")){
            
        }

    }
    




// after classes removed: after:h-6 after:w-6 after:my-auto after:rounded-full after:bg-remove after:bg-cover after:bg-center after:ml-4 hover:after:bg-white 