let seleccionar = document.querySelector("select");
let parrafo = document.querySelector("p");

seleccionar.addEventListener("change", establecerHorario);

function establecerHorario() {
  let eleccion = seleccionar.value;

  if (eleccion === "mañana") {
    parrafo.textContent = "Es hora de despertarse en la mañana. ¡Levántate y comienza tu día con energía!";
  } else if (eleccion === "siesta") {
    parrafo.textContent = "Es la hora de la siesta. Tómate un breve descanso para recargar energías.";
  } else if (eleccion === "noche") {
    parrafo.textContent = "Es hora de ir a dormir en la noche. ¡Duerme bien y descansa!";
  } else {
    parrafo.textContent = "";
  }
}
