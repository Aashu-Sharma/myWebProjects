let inputBox = document.querySelector("#inputBox");
let btn = document.querySelector("button");
let listContainer = document.querySelector("#listContainer");

// ---------------------------------Adding Todos------------------------------------

btn.addEventListener("click",()=>{
    if(inputBox.value === ""){
        alert("Please write something first");
    }else{
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.innerHTML = inputBox.value;
        li.appendChild(span);
        listContainer.appendChild(li);
        inputBox.value = '';
    }
    saveTodos();
});

// ---------------------------------Updating Todos------------------------------------

listContainer.addEventListener("click", (e)=>{
    // e.target.tagName === "SPAN" ? e.target.parentElement.remove() : console.log(e);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveTodos();
})

// ---------------------------------Saving and Retrieving Todos------------------------------------

function saveTodos(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTodos(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTodos();