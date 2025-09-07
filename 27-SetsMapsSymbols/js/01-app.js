/*  1. Sets nos permite crear una lista de valores sin duplicados
    2. Al manejar gran volumen de datos es más rapido que un objeto u array 
*/



const carrito = new Set();

//Agregamos elementos al set

carrito.add('camisa');
carrito.add('disco 1');
carrito.add('disco 2');
//Si inteamos agregar un duplicado no se agrega dos veces
carrito.add('disco 3');
carrito.add('disco 3');

console.log(carrito.size); //Nos indica la cantidad de elementos
console.log(carrito.has('camisa')); //Nos indica si un elemento existe (agregando true o false)
carrito.delete('disco 2'); /* Eliminamos un element. (Si un elemento te arroja un false es que no existe) */
/* carrito.clear(); */ /* Elimina todos los elementos del set */

/* set es iterable */
carrito.forEach((producto, index, pertenece) =>{
    /* console.log(producto);
    console.log(index); */
    console.log(pertenece); //Obtiene el set original
})

console.log(carrito);




/* Ejemplo de uso de set */
const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);