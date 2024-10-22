const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Utilizando un foreach


let total = 0;
carrito.forEach(producto => total += producto.precio);

console.log(total);


//Con un reduce

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0 ) /* Total es el parametro donde se guarda la suma de producto.precio, 0 es el valor con el que inicia */
console.log(resultado);