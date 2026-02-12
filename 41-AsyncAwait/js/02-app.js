function descargarClientes(){

    return new Promise((resolve, reject) =>{
        const error = true;

        setTimeout(() => {
            if(!error){
                resolve('El listado de clientes se descargo correto');
            } else{
                reject('Error en la conexión');
            }
        }, 3000);
    })
}

//Async await

async function ejecutar(){ //funcion padre tiene que tener async
    try {
        console.log(1+1);
        //respuesta es el resolve
       const respuesta = await descargarClientes(); /* await bloque la ejecucion del codigo hasta que se resuelva el promise */
       console.log(2+2);
       console.log(respuesta);


    } catch (error) {
        //error es el reject del promise
        console.log(error)
    }
}

ejecutar();