/* for( let i = 0; i <= 10; i++){
    if(i === 5){
        console.log('CINCO');
       // break; //Ya no se ejecuta mas el codigo restante al llegar al 5
       continue; //Continua el codigo restante
    }
    console.log(`Numero: ${i}`)
}
 */

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100, descuento: true},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]


for(let i = 0; i< carrito.length; i++){

    if(carrito[i].descuento){
        console.log(`El Articulo ${carrito[i].nombre} tiene un descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}

