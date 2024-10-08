const producto = {
    nombre: "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

//Forma antigua de obtener el valor de un producto
/* const nombre = producto.nombre;
console.log(nombre);
 */

//destructuring de objetos
const { nombre, precio /* crea la variable y la extrae en el mismo paso */ } = producto;

console.log(nombre);
console.log(precio);
