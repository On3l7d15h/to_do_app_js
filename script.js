//variables
const vars = {
	btnAdd: document.querySelector(".container h1"),
	cont: document.querySelector(".container .container_task"),
	container: document.querySelector(".container"),
	btnMsg: document.querySelector(".nav span"),
	msg: document.querySelector(".message"),
	btnGet: document.querySelector(".message .message_front button")
}

let localItems = JSON.parse(localStorage.getItem("item"));
localItems === null ? tasklist = [] : tasklist = localItems;

//Funcionalidades
vars.btnAdd.addEventListener("click", () => {

	localItems = JSON.parse(localStorage.getItem("item"));
  localItems === null ? tasklist = [] : tasklist = localItems;

	let x = prompt("Type your task here!");
	
	if(x !== null && x !== ""){
		tasklist.push(`${x}`);
		localStorage.setItem("item", JSON.stringify(tasklist));
			vars.cont.innerHTML = "";
  		tasklist.map((t, i) => {
  			vars.cont.innerHTML += `<div class = "container_task_child" onclick="deleteItem(${i})"> ${t} </div>`;
			});  
	} else {
		throw alert("No ha insertado datos, Error");
	}
});

//segunda funcionalidad
vars.btnMsg.addEventListener("click", () => {
	vars.msg.style.transform = `scale(${1})`; 
});

//tercera funcionalidad
vars.btnGet.addEventListener("click", () => {
	vars.msg.style.transform = `scale(${0})`;
});

//Animaciones con js
window.addEventListener("load", () => {
	vars.container.style.top = `${-10}px`; 
	vars.container.style.opacity = `${1}`;
});

//cont
const deleteItem = (index) => {
	localItems = JSON.parse(localStorage.getItem("item"));
  localItems === null ? tasklist = [] : tasklist = localItems;
	tasklist.splice(index, 1);
	alert("Delete Succesfully");
	localStorage.setItem("item", JSON.stringify(tasklist));
	vars.cont.innerHTML = "";
  tasklist.map((t, i) => {
  vars.cont.innerHTML += `<div class = "container_task_child" onclick="deleteItem(${i})"> ${t} </div>`;
  });       
}

//mostrando historial
localItems = JSON.parse(localStorage.getItem("item"));
localItems === null ? tasklist = [] : tasklist = localItems; 
vars.cont.innerHTML = "";
tasklist.map((t, i) => {
	vars.cont.innerHTML += `<div class = "container_task_child" onclick="deleteItem(${i})"> ${t} </div>`;
});
