//Capturar input de tareas
const tarea_input = document.querySelector("#tarea-input");

//Botones de agregar tarjeta y eliminar todas
const btn_add = document.querySelector(".btn-add");
const btn_clear = document.querySelector(".btn-clear");
const delete_icon = document.querySelector(".delete-icon");

//contenedor padre de tarjetas
const lista_tareas = document.querySelector(".lista-tareas");
const tarea_texto = document.querySelector(".tarea-texto");
const tarea = document.querySelector(".tarea");

//funcion para crear tarjeta y agregarla al contenedor
const crearTarjeta = tarea => {
	let tarjeta = document.createElement("div");
	tarjeta.setAttribute("class", "tarea");
	tarjeta.innerHTML = `
	<span class="tarea-texto">${tarea}</span>
			<div class="opciones">
				<input class="check-input" type="checkbox">
				<i class="delete-icon fa-solid fa-x"></i>
			</div>
	`;
	lista_tareas.appendChild(tarjeta);
	tarjeta.addEventListener("click", e => {
		if(e.target.localName === "i") {
			lista_tareas.removeChild(tarjeta);
		}
	})

	btn_clear.addEventListener("click", () => {
		while(lista_tareas.hasChildNodes()) {
			lista_tareas.removeChild(lista_tareas.firstChild);
		}
	})
}
btn_add.addEventListener("click", () => {

	if(tarea_input.value === "") {
		return;
	}

	crearTarjeta(tarea_input.value);
	tarea_input.value = "";
})