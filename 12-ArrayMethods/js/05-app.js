const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//.find busca un objeto dentro de un arreglo y lo extrae

//Con un foreach
let resultado = '';
carrito.forEach((producto, index) =>{
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index];
    }
})


console.log(resultado);


//con .find
//.find solo retorna el primer resultado de una busqueda
const resultado2 = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado2);