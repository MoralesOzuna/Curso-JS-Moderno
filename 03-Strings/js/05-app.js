const producto = "Monitor 20 pulgadas";

console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace("Monitor", "Monitor Curvo"));



//Slice para cortar
console.log(producto.slice(0, 10)); //0 donde inicia, 10 donde termina
//console.log(producto.slice(8)); //Corta desde la posicion 8

//Alternativa a slice
console.log(producto.substring(0,10));


/* PREGUNTA IMPORTANTE ¿CUAL ES LA DIFERENCIA ENTRE SLICE Y SUBSTRING */

console.log(producto.slice(2, 1)); //Al colocar esta combinacion en slice, no hace nada
console.log(producto.substring(2, 1)) //Substring es más inteligente y su logica reacomoda el metodo al reves producto.substring(1,2)


const usuario = "Juan";
console.log(usuario.substring(0, 1));

console.log(usuario.charAt(0)); //Recorta la primera letra