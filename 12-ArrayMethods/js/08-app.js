const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

console.log(meses);


/* El Spread Operator es una buena opcion ya que no modifica el arreglo original
Esto mismo lo hace parte de una metodologia que se llama programacion funcional

*/
const meses2 = [...meses, 'Agosto']; 

console.log(meses2);


const producto = { nombre: 'Disco Duro', precio: 300}

const carrito2 = [...carrito, producto]; //Un objeto se agrega a un spreedOperator mediante el nombre unicamente
console.log(carrito2);