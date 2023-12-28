const inputBox = document.querySelector(".inputbox input");
const addButton = document.querySelector("#addbutton");
const todoList = document.querySelector(".itemlist");
const taskCount = document.querySelector(".task-count");
const deleteAllBtn = document.querySelector(".delete-all-btn");

// onkeyup event for hide and unhide Add button
inputBox.onkeyup = () => {
    let UserEnterValue = inputBox.value; //Store user entered value
    if (UserEnterValue.trim() != 0) { //if the user value isn't only spaces
        addButton.style.display = "block"; //add button show
    }
    else {
        addButton.style.display = "none";//add button hide
    }
}

// Add a task in array using enter key
inputBox.addEventListener('keyup', (e) => {
    if( e.key === "Enter") {
        addButton.onclick();
    }
});

var item = [];
// Onclick Event is used to add task in array
addButton.onclick = () => {
    item.push(inputBox.value)//Item Add In Array
    showcase(); // showcase call for add li tag in html etc.
}

// Showcase function display all the added task
function showcase() {
    let ListTag = "";
    item.forEach((element, index) => {
        ListTag += `<li>
                        <label class="box">
                            <input class="checkinput" type="checkbox">
                            <span class="checkmark"></span>${element}
                        </label>
                        <span class="icon">
                            <i class=" del uil uil-trash-alt" onclick="deleteTask(${index})"></i>
                        <span>
                    </li>`;
                });
    todoList.innerHTML = ListTag; //adding new li tag inside ul tag
    inputBox.value = ""; //once task added the input field blank
    addButton.style.display = "none"; //Add button hide
    taskCount.textContent = item.length; //total task counting
}

// Delete task function is used to remove the task from the list
function deleteTask(index) {
    item.splice(index, 1); // remove element from array
    showcase();
}
// delete all tasks function is used for delete all task from your list
deleteAllBtn.onclick = () => {
    item = []; //empty the array
    showcase();
}
// Clear Completed is used for which task complete delete from list.
document.querySelector('.delete-marked-btn').onclick = () => {
    var inputElems = document.querySelectorAll(".checkinput"); // Select selected task in list
    var temp = [] // create new arr for store completed task
    for (var i = 0; i < item.length; i++) {
        if (inputElems[i].checked === true) {
            temp.push(item[i]);
        }
    }
    var j = 0;
    for (i = 0; i < item.length; i++) {
        if (item[i] === temp[j]) {
            item.splice(i, 1); //if task store in temp array then remove from item array
            j++;
            i--; //Array.length -1 because 1 element splice than i-- use for back
        }
    }
    showcase();
}

// Complete all task is used for completer all task
document.querySelector('.mark-all-btn').onclick = () => {
    checked(true);
}
// Uncomplete all task is used for uncompleter all task
document.querySelector('.unmark-all-btn').onclick = () => {
    checked(false);
}
// Checked funtion is used to checked and unchecked task
function checked(params) {
    var inputElems = document.querySelectorAll(".checkinput"); // Select selected task in list
    for (var i = 0; i < item.length; i++) {
        if (params == true) {
            inputElems[i].checked = true;
        }
        else {
            inputElems[i].checked = false;
        }
    }
}