//Es una api que nos permite abrir la pantalla completa
const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);


function pantallaCompleta(){
    document.documentElement.requestFullscreen(); /* document.documentElement nos trae todo el html, esto se cambia de acuerdo al elemento al que quieres colocar en modo pantalla completa */


}

function cerrarPantallaCompleta(){
    document.exitFullscreen();
}