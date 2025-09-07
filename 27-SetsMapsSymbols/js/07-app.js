/* GENERADOR
    Un generador lleva un asteristico al inicio
    La principal caracteristica del generador es que guarda datos sin embargo al recorrerlo de manera automatica se pausa despues de otorgar algun elemento.

    PUEDE según comentarios en el curso, ser utilcuando tienes un array enorme y te consume muchos recursos lo cual afecta en el performance, con los generadores al tener el control total del loop no es necesario que se recorra todo ese array, lo puedes parar cuando ya obtuviste lo que necesitabas.

*/


function *crearGenerador(){
    yield 1;
    yield 'Juan';
    yield 3*3;
    yield true;
}

/* 
const iterador = crearGenerador();

console.log(iterador); //Un generador normalmente se encuentra en modo suspended, lo cual quiere decir que no esta activo funcionando
console.log(iterador.next().value); //Con next se reactiva y accedes al primer valor del generador\
console.log(iterador); //Sin embargo vuelve a su estado suspended

console.log(iterador.next()); //Accedes al segundo valor 'Juan', done: false;
console.log(iterador.next()); //'9', done: false
console.log(iterador.next()); //'true', done: false
console.log(iterador.next()); //undefined, done: true; ya que termino con todos los elementos
console.log(iterador);
 */

function *generadorCarrito( carrito ){
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
    }
}


const carrito = ['producto 1', 'producto 2', 'producto 3'];

const iterador = generadorCarrito(carrito);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());