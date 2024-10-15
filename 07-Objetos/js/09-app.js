//Nos da una serie de objects methods para los objetos
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

//con este metodo no se permite agregar o eliminar propiedades pero si puedes modificar propiedades
Object.seal( producto );

producto.nombre = "HOLA";
console.log(producto); 

console.log(Object.isSealed(producto));

