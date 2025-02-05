const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You have to type somthing!")
    } else  {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = ""
    saveItem()
}

listContainer.addEventListener("click", function (e) {
    console.log(e.target.tagName)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveItem()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveItem()
    }
},false)

function saveItem() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()