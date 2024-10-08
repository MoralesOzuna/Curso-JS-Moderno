const producto = {
    nombre: "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}
//Agregar nuevas propiedades al objecto
producto.imagen = "Imagen.jpg"

//Eliminar propiedades del objecto
delete producto.disponible;
console.log(producto)