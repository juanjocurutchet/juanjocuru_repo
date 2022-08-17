import "./styles.css";

//declaro, tipifico e inicializo las variables
let tiempoVuelta1: number = 0;
let tiempoVuelta2: number = 0;
let tiempoVuelta3: number = 0;
let tiempoVuelta4: number = 0;
let tiempoTotal: number = 0;
let tiempoPromedio: number = 0;

//obtengo los elementos por su Id
const vta1 = document.getElementById("vta1") as HTMLElement;
const vta2 = document.getElementById("vta2") as HTMLElement;
const vta3 = document.getElementById("vta3") as HTMLElement;
const vta4 = document.getElementById("vta4") as HTMLElement;
const TmpoT = document.getElementById("TmpoT") as HTMLElement;
const TmpoP = document.getElementById("TmpoP") as HTMLElement;

//Calculo tiempo total al clickear boton, muestro en pantalla e imprimo en consola
TmpoT.addEventListener("click", function () {
  tiempoVuelta1 = Number(vta1.value);
  tiempoVuelta2 = Number(vta2.value);
  tiempoVuelta3 = Number(vta3.value);
  tiempoVuelta4 = Number(vta4.value);
  tiempoTotal = tiempoVuelta1 + tiempoVuelta2 + tiempoVuelta3 + tiempoVuelta4;
  resultado.innerText = tiempoTotal;
  console.log(tiempoTotal);
});

//Calculo tiempo promedio al clickear boton, muestro en pantalla e imprimo en consola
TmpoP.addEventListener("click", function () {
  tiempoPromedio = tiempoTotal / 4;
  resultado1.innerText = tiempoPromedio;
  console.log(tiempoPromedio);
});
