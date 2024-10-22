const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]




meses.forEach((mes, i) => { /* el primer parametro es el valor, el segundo es la llave  */
    console.log(i);
    console.log(mes);

    if(mes === 'Abril'){
        console.log(`Encontrado en el indice ${i}`);
    }
})

//Encontrar el indice de abril
const indice = meses.findIndex( mes => mes ==='Abril' ); //Si das un valor que no existe seria -1 como resultado
console.log(indice);

if(indice > 0){
   console.log( 'Sí lo encontro');
}


const indice2 = carrito.findIndex( producto => producto.nombre === 'Televisión'); /* Si dos productos tienen el nombre igual, solo te va a retornar el primero */
console.log(indice2);
if(indice2 > 0){
    console.log('Producto encontrado');
}