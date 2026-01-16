console.log("js read")
read()
function Add() {
     let input = document.getElementById("Textinput");
     let task = input.value.trim();
     
     if (task !== "") {
       let li = document.createElement("li");
       li.textContent = task;
       
       document.getElementById("list").appendChild(li);
       let del = document.createElement("span");
       del.innerHTML = "";
       del.style.cursor =  "pointer";
      
       del.onclick = function(){
         li.remove();
         console.log("remove");
         save()
       };
       li.addEventListener("click", () => {
         li.classList.toggle("done")
         save()
      });
       
           
       
       li.appendChild(del);
       console.log("task Added");
       save()
       input.value = "";
     }
}
function save(){
  let list = document.getElementById('list').innerHTML ;
  localStorage.setItem("data" ,list);
}
function event(){
  let item = document.querySelectorAll("#list li")
  item.forEach(li=>{
    let del = li.querySelector("span");
    del.onclick = function(e){
      e.stopPropagation();
      li.remove();
      save()
      console.log("remove");
    };
    li.addEventListener("click", () => {
     li.classList.toggle("done")
     save()
    });
  });
}
function read(){
  let data = localStorage.getItem("data");
  if (data) {
    document.getElementById("list").innerHTML = data;
  }
  event();
}