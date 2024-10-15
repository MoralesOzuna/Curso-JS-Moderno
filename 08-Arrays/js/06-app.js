const carrito = [];

//Defininir un producto

const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}
const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 ={
    nombre: 'Teclado',
    precio: 200
}

//Forma declarativa, no modifica la variable original si no que crea una nueva

let resultado;

resultado = [...carrito, producto]; //Agrega el producto al final
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado]; //Agrega el producto principio
console.table(resultado);