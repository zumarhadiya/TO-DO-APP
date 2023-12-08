
var inputBOX = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");
function addTask() {
    var inputBOX = document.getElementById("input-box");
    var listContainer = document.getElementById("list-container");
    if (inputBOX.value === '') {
        alert("write something to add in todo list");
    }
    else {
        // adding dustbin image
        var img = document.createElement("img")
        img.src = "imgs/dustbin.png"
        img.setAttribute('class', 'img')
        // adding edit image
        var edit = document.createElement("img")
        edit.src = "imgs/pencil.png"
        edit.setAttribute('class', 'edit')
        // adding li tag
        var li = document.createElement("li");
        li.innerHTML = inputBOX.value;
        listContainer.appendChild(li);


        let span = document.createElement("span");
        span.appendChild(img)
        span.appendChild(edit)
        li.appendChild(span)
    }
    inputBOX.value = '';
    li.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        }
    })
    img.addEventListener("click", function (b) {
        if (b.target.className === "img") {
            b.target.parentElement.parentElement.remove();
        }
    })
    edit.addEventListener("click", function (c) {
        if (c.target.className === "edit") {
            alert("you can't edit it. Delete and write it again")
        }
    })
}