const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

//we want color 1 to have an eventlistener 
function setGradient() {
    body.style.background =  body.style.background = "linear-gradient(to right, " 
    + color1.value + ", " 
    + color2.value + ")";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
   



