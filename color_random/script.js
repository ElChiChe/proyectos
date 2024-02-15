//Capturar todos los botones
const btn_change_mode = document.querySelector(".btn-change-mode");
const btn_change_color = document.querySelector(".btn-change-color");

//Capturar el elemento de texto para cambiar el color
const color_span = document.querySelector(".color-span");

//Capturamos el contenedor que cambiará su background de color
const main = document.querySelector(".main");

//Almacenamos algunos colores dentro de un array
let colores = [
	"red",
	"blue",
	"orange",
	"lightblue",
	"gold",
	"cyan",
	"yellow",
	"brown",
	"pink",
	"violet",
];

//Creamos una función para generar un color random de texto
const colorRandomSimple = colores => {
	let color = Math.floor(Math.random() * colores.length);
	return colores[color];
}

//Creamos una función para generar un color random hex

const coloresHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorRandomHex = colores => {
	let hex = "#";

	//iteramos para tener los 6 dígitos que componen un colo HEX
	for(let i = 0; i < 6; i++) {
		let index = Math.floor(Math.random() * colores.length);
		hex += colores[index];
	}
	return hex;
}

//Creamos una funcionalidad para cambiar el tipo de formato
//Si formato texto o formato HEX

const cambiarBoton = boton => {
	boton.addEventListener("click", () => {
		boton.classList.toggle("hex");
		if(boton.classList.contains("hex")) {
			boton.textContent = "Hex";
		}
		else {
			boton.textContent = "Simple";
		}
	})
}

cambiarBoton(btn_change_mode);

//La función tiene que cambiar el color con el formato adecuado
//seleccionado, cuando se haga click cambiar de color el background

btn_change_color.addEventListener("click", () => {
	if(!btn_change_mode.classList.contains("hex")) {
		let color = main.style.backgroundColor = colorRandomSimple(colores);
		color_span.textContent = color;
		color_span.style.color = color;
	}
	else {
		let color = main.style.backgroundColor = colorRandomHex(coloresHex);
		color_span.textContent = color;
		color_span.style.color = color;
		
	}
})