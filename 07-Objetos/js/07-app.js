const producto = {
    nombre: "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

/* La desventaja de los objetos es que las propiedades si se pueden modificar, sobreescribir o eliminar, aunque sean del tipo constante*/

producto.disponible = false;
console.log(producto);