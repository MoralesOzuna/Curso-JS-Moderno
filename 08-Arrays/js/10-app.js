const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]


for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

//Metodo forEach

const nuevoArreglo = carrito.map(producto =>{
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

// .map es capaz de crear un nuevo Arreglo, ForEach no puede hacerlo
console.log(nuevoArreglo);
