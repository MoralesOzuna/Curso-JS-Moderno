//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];





//Event Listeners
eventListeners();


function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}




//Funciones
function agregarTweet(e){
    e.preventDefault();
    


    //TextArea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value; //Obtenemos el valor en el textArea

    //validacion
    if(tweet === ''){
        

        mostrarError('Un mensaje no puede ir vacio')
        return; //previene que se ejecuten mas lineas de codigo
    }
    
    console.log('agregando tweet');
}

//Mostrar mensaje de error

function mostrarError(error){

    const errorPrevio = document.querySelector('.error');

    if(errorPrevio){
        return;
    }

    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido

    const contenido = document.querySelector('#contenido');

    
    contenido.appendChild(mensajeError);

    setTimeout(() =>{
        mensajeError.remove(); //elimina la alerta despues de 3s
    }, 3000)

    


}