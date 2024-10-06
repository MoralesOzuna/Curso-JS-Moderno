const producto = "        Monitor 20 pulgadas                  ";


console.log(producto);
console.log(producto.length);

//Eliminar espacios blanco del inicio
console.log(producto.trimStart());

//Eliminar espacios en blanco al final
console.log(producto.trimEnd());

//Eliminar espacios en ambas direcciones
console.log(producto.trimStart().trimEnd());

//Eliminar en ambas direcciones
console.log(producto.trim()); 