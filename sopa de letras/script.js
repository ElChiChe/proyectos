const palabra_texto = document.querySelectorAll(".palabra-texto");
const letras = document.querySelectorAll(".letra");

const lista_palabras = [
		"avion",
		"perro",
		"cazar",
		"rosas",
]

//Función para seleccionar la letra
const palabraSeleccionada = palabras => {

	let contador_letras = 0;

	//Seleccionamos la primera palabra del arreglo de palabras
	let palabra = palabras[0].toUpperCase();
	let maxIntentos = 6;
	//Array para guardar las letras correctas
	let chars = [];

	//Iteramos a través de los botones de letras
	letras.forEach((letra, i) => {

		// console.log(palabra.indexOf(letra.textContent), letra.textContent);
		letra.addEventListener("click", e => {
			//Guardamos los valores de cada letra
			let value = e.target.textContent;

			//Checkeamos si el índice de la
			//palabra corresponde con la palabra
			//Si es falso pintamos el botón de rojo
			if(palabra.indexOf(value) === -1) {
				letra.classList.add("letra-incorrecta");

				//Si la letra es incorrecta, deshabilitar el botón
				//para que no presione la misma letra incorrecta
				//dejar marcado con rojo
				letra.setAttribute("disabled", true);
				contador_letras++;

				//Si el jugador realiza todos sus intentos para
				//adivinar la palabra, termina el juego y vuelve
				//el contador a 0.
				if(contador_letras === maxIntentos) {
					alert("PERDISTE :(");
					location.reload();
					contador_letras = 0;
					console.log("No llegaste perro :(");
				}
			}

			//en caso de que sea verdadero, pintamos el botón de
			//color verde.
			//Seteamos el índice del botón de letra seleccionado
			//y lo guardamos como el índice de la palabra
			//re confuso xD
			if(palabra.includes(value)) {
				if(contador_letras <= maxIntentos && contador_letras <= palabra.length) {
					contador_letras++;
				}

				//Si la letra es correcta deshabilitar el botón
				//y dejar marcado con verde
				letra.setAttribute("disabled", true);
				letra.classList.add("letra-correcta");
				i = palabra.indexOf(value);

				//Cuando la letra sea correcta agregarla al array
				chars[i] = value;
				pintarLetra(palabra_texto, i, value);

				//Si al convertir el array de letras a un string
				//es igual a la palabra seleccionada
				//terminar el juego y volver la cuenta a 0
				if(chars.join("") === palabra) {
					alert("GANASTE!!");
					console.log("GANASTE!!");
					location.reload();
				}
			}
		})
	})
}

//Función para pintar la letra correcta
const pintarLetra = (palabras, index, value) => {
	return palabras[index].textContent = value;
}

palabraSeleccionada(lista_palabras);