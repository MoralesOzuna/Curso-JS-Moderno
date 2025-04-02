//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];





//Event Listeners
eventListeners();


function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () =>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];


        console.log(tweets);

        crearHTML();
    })
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
    
    const tweetObj = {
        id: Date.now(), //emulamos un id. //Date.now() basicamente nos brinda un lapso de tiempo en milisegundos, por lo que sirve para este proposito de id
        tweet //es como tweet: tweet, cuando llave es igual al valor con colocar una vez el texto js lo comprende
    }
    //añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    crearHTML();
    
    //reiniciar el formulario
    formulario.reset();


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


//Muestra un listado de los tweets

function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet =>{
            //Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }

            //Crear el HTML
            const li = document.createElement('li');

            //añadir el texto
            li.innerText = tweet.tweet
            li.appendChild(btnEliminar);

            //Insertar en el htm

            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}


///Agrega los tweets actuales a local storage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Funcion eliminar tweet
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id );
    crearHTML();
}
//Limpiar el HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}