for( let i = 0; i <= 10; i += 2 ){
    console.log(`Numero: ${i}`);
}

//Saber si un numero es mayor o menor
for(let i = 1; i <= 10; i++){
    if(i % 2 === 0 ){ //Si el restante es = 0, entonces es par
        console.log(`El numero ${i} es par`);
    } else{
        console.log(`El numero ${i} es impar`)
    }
}


const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]


for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i]);
}
