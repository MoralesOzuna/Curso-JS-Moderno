//Forma imperactiva modifcamos la variable original

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
const producto4 ={
    nombre: 'celular 2',
    precio: 200
}
//push agrega elementos al final del arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);


const producto3 ={
    nombre: 'Teclado',
    precio: 200
}

//unshift agrega elementos al principio del arreglo
carrito.unshift(producto3);





//ELIMINAR ULTIMO ELEMENTO DE UN ARREGLO
//carrito.pop();

console.table(carrito);

/* carrito.pop();

console.table(carrito); */

//Eliminar del inicio del arreglo

//carrito.shift();
//console.table(carrito);



carrito.splice(1, 3); /* 1 se refiere a la posicion en el arreglo, 3 se refiere a cuantos elementos vas a quitar a partir de ahi */
console.table(carrito);