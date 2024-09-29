let inputBox = document.getElementById("input-box");
let btn = document.querySelector("button");
let listContainer = document.getElementById("list-container");

btn.addEventListener("click",()=>{
    if(inputBox.value === ''){
        alert("please write something before adding")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
        inputBox.value = '';
        saveData();
    }
});

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    };
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();