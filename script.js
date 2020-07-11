const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");
const CSS = document.querySelector("h3");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+color1.value
	+", "
	+color2.value
	+")"
	CSS.innerText = `body.style.background = "linear-gradient(to right, ${color1.value}, ${color2.value})"`
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function init() {
	color1.value="#ffffff";
	color2.value="#0000ff";
	setGradient();
}

init();