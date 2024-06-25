const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTodo(){
    if (inputBox.value === ''){
        alert("please Enter Some Text")
    }
    else{ 
        const li = document.createElement('li')
        li.innerHTML = inputBox.value;
        li.setAttribute("class","unchecked");
        listContainer.appendChild(li)
        inputBox.value = '';
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";   // created a cross. to remove todo
        li.appendChild(span)
        saveData()
    }
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()