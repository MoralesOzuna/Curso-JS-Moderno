/* Fetch API
Solo lee texto plano o Json

*/
const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);


function obtenerDatos(){
    /* fetch('data/datos.txt'); 1 forma de hacerlo */

    const url = 'data/datos.txt';

    fetch(url)
        .then (respuesta => {
            console.log(respuesta); //objeto general 
            console.log(respuesta.status); //200 que siginifca ok
            console.log(respuesta.statusText) //indica ok, osea que todo esta bien
            console.log(respuesta.url); //url
            console.log(respuesta.type) //consulta de tipo basic

            return respuesta.text()
        })
        .then(datos =>{ //Es donde viene el contenido del return
            console.log(datos);
        })
        .catch( error=>{
            console.log(error);
        })
}