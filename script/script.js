console.log("js read")

function Add() {
     let input = document.getElementById("Textinput");
     let task = input.value.trim();
     
     if (task !== "") {
       let ol = document.createElement("ol");
       ol.textContent = task;
       
       document.getElementById("list").appendChild(ol);
       input.value = "";
     }
}
