//forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript' ];

pendientes.forEach( (pendiente, indice) => console.log(`${indice} : ${pendiente}`)); //Indice o I etc. Pasa de forma automatica el valor del indice


const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

//se utiliza para ejecutar una función en cada elemento del array, pero no devuelve un nuevo array. En su lugar, devuelve undefined.
const nuevoArreglo = carrito.forEach( producto => producto.precio); 


//map crea un nuevo array con los resultados de aplicar la función dada a cada elemento del array original.
//Resultado nuevoArreglo2 contendrá un nuevo array con los nombres de los productos.



const nuevoArreglo2 = carrito.map(producto => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2); //Map nos ayuda a crear un nuevo objeto