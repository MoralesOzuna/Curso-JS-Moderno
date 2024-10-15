const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]


//Metodo forEach

const nuevoArreglo = carrito.map (producto => `${producto.nombre} - Precio: ${producto.precio}`) ;

const nuevoArreglo2 = carrito.forEach(producto => console.log( `${producto.nombre} - Precio: ${producto.precio}`));


// .map es capaz de crear un nuevo Arreglo, ForEach no puede hacerlo
console.log(nuevoArreglo);
