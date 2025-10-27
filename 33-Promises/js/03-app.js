/* los parametros son 2 palabras reservadas de los promises. 
1. resolve se ejecuta cuando se ejecuta correctamente el promise
2. reject cuando existe un error*/

const aplicarDescuento = new Promise((resolve, reject)=>{ 

    const descuento = true;

    if(descuento){
        resolve('Descuento aplicado')
    }else{
        reject('No se pudo aplicar el descuento')
    }
})



aplicarDescuento //Es la accion que sucede una vez se realiza el promise
    .then(resultado => descuento(resultado) )  //De esta forma es como mostramos el mensaje de resultado, si fullfilled, rejected o pending
    .catch(error=> console.log(error)); //Catch nos atrapa o nos permite mostrar el mensaje de rejected
        


/* Hay 3 valores posibles
fullfilled - el promise se cumplio
rejected - el promise no se cumplio
pending - es cuando el promise aun no se cumple ni se ha rechazado.

*/


function descuento(mensaje){
    console.log(mensaje);
}