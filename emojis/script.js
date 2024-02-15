const input_texto = document.querySelector(".input-texto");
const emoji_span = document.querySelector(".emoji-span");

const emojis = {
	":)": "😀",
	":D": "😁",
	":(": "☹️",
	":'(": "😪",
	"8)": "😎",
	":|": "😐",
	":O": "😮",
	":*": "😙",
	":P": "😛",
}

const seleccionarEmoji = (value, emojis) => {
	for(let i in emojis) {
		if(i === value) {
			return emojis[i];
		}
	}
}

input_texto.addEventListener("input", () => {

	let value = input_texto.value;

	let emojiSeleccionado = seleccionarEmoji(value, emojis);

	if(emojiSeleccionado) {
		emoji_span.textContent += emojiSeleccionado;
		input_texto.value = "";
	}

})