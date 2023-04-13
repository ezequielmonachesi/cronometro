let cronometro = document.querySelector("#cronometro");
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset')

let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let horas = 0;

play.addEventListener('click', iniciar);
pause.addEventListener('click', pausar);
reset.addEventListener('click', resetear);

function escribir(){
    let ht;
    let mt;
    let st;
    let mlst;
    milisegundos++;

    if(milisegundos>99){
        segundos++;
        milisegundos = 0;
    }
    if(segundos > 60){
        minutos++;
        segundos = 0;
    }
    if(minutos > 60){
        horas++;
        minutos = 0;
    }

    mlst = 
}


//10:30:25
const segundosIn = setInterval(seg, 1000);