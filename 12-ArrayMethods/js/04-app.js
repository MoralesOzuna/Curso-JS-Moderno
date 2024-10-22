const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

/* filtrar productos arriba de $400 */


let resultado


resultado = carrito.filter( producto => producto.precio > 400); /* Asigna a resultado los productos mayores a 400 */
console.log(resultado); /* Crea un nuevo arreglo con los elementos que cumplen con la condicion*/

resultado = carrito.filter(producto => producto.precio < 600);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== 'Audifonos');
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre === 'Audifonos');
console.log(resultado);