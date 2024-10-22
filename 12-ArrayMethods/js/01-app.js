const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe en un arreglo

meses.forEach(mes =>{
    if(mes === 'Enero'){
        console.log('Enero sí existe');
    }

});

//Include solo funciona en arreglos convesinonales
const resultado = meses.includes('Enero');
console.log(resultado); //retorna true

//En un arreglo de objetos se utiliza .some

const existe = carrito.some( producto => /* return (no se coloca pero se da por implicito) */producto.nombre === 'Celular');
console.log(existe); //Retorna true o false

//Arreglo tradicional con .some

const existe2 = meses.some(  mes => /* return, no se coloca pero se da por implicito */ mes === 'Febrero');
console.log(existe2)