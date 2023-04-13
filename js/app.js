let cronometro = document.querySelector("#cronometro");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let horas = 0;
let tiempoInicio;

play.addEventListener("click", iniciar);
pause.addEventListener("click", pausar);
reset.addEventListener("click", resetear);

function escribir() {
  let ht;
  let mt;
  let st;
  let mlst;
  milisegundos++;

  if (milisegundos > 99) {
    segundos++;
    milisegundos = 0;
  }
  if (segundos > 59) {
    minutos++;
    segundos = 0;
  }
  if (minutos > 59) {
    horas++;
    minutos = 0;
  }

  if (milisegundos < 10) {
    mlst = `0${milisegundos}`;
  }else{
    mlst = `${milisegundos}`;
  }
  if (segundos < 10) {
    st = `0${segundos}`;
  }else{
    st = `${segundos}`;
  }
  if (minutos < 10) {
    mt = `0${minutos}`;
  }else{
    mt = `${minutos}`;
  }
  if (horas < 10) {
    ht = `0${horas}`;
  }else{
    ht = `${horas}`;
  }

  cronometro.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
}

function iniciar() {
  escribir();
  tiempoInicio = setInterval(escribir, 10);
  play.removeEventListener('click', iniciar)
}
function pausar(){
    clearInterval(tiempoInicio);
    play.addEventListener('click', iniciar)
}
function resetear(){
    clearInterval(tiempoInicio);
    cronometro.innerHTML = '00:00:00.00'
    horas = 0;
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
    play.addEventListener('click', iniciar)
}

//10:30:25
