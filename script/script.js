console.log("js read")

function Add() {
     let input = document.getElementById("Textinput");
     let task = input.value.trim();
     
     if (task !== "") {
       let li = document.createElement("li");
       li.textContent = task;
       
       document.getElementById("list").appendChild(li);
       let del = document.createElement("span");
       del.innerHTML = "X";
       li.appendChild(del)
       input.value = "";
     }
}