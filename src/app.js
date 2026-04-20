import "bootstrap";

const carta = document.querySelector(".card");
const boton = document.querySelector(".btn");

function cargarCarta() {
  const numeroDeCarta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J"];
  const palos = ["♦", "♥", "♠", "♣"];

  const generarPosicion = (limit) => Math.floor(Math.random() * limit);

  let palo = palos[generarPosicion(3)];
  let num = numeroDeCarta[generarPosicion(13)];

  let colorTexto = palo === "♥" || palo === "♦" ? "text-danger" : "";

  carta.innerHTML = `
      <div class="row h-100 ">
        <div class="col-3 align-self-start display-1 fw-bold ${colorTexto}">${palo}</div>
        <div class="col-6 align-self-center display-1 fw-bold ${colorTexto} text-center">${num}</div>
        <div class="col-3 align-self-end display-1 fw-bold ${colorTexto}" style="transform: rotate(180deg); display: inline-block;">${palo}</div>
      </div>`;
}

window.onload = cargarCarta();
boton.addEventListener("click", cargarCarta);
setInterval(() => {cargarCarta()}, 10000);
