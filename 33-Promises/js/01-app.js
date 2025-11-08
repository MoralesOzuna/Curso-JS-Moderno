/* Tema de callbacks.
Es una funcion que se pasa como parametro a otra funcion, para que esa otra funcion se ejecute más tarde.

En nuestro ejemplo se cargan los paises, sin embargo, unos segundos despues se agrega un pais adicional*/


const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

function nuevoPais(pais, callback){
    setTimeout(()=>{
        paises.push(pais);
        callback();
    },2000)
}

function mostrarPaises(){
    setTimeout(()=>{
        paises.forEach(pais =>{
            console.log(pais);
        })
    }, 1000)
}



//mostrarPaises();

nuevoPais('Alemania', mostrarPaises());