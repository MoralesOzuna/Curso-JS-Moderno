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

//push agrega elementos al final del arreglo
carrito.push(producto);
carrito.push(producto2)


const producto3 ={
    nombre: 'Teclado',
    precio: 200
}

//unshift agrega elementos al principio del arreglo
carrito.unshift(producto3);


console.table(carrito);