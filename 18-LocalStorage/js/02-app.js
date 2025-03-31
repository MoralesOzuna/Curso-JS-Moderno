/* Obtener dato guardados en el localStorage */
const nombre = localStorage.getItem('Meses2');

console.log(nombre);



const productoJSON = localStorage.getItem('producto2');
console.log(JSON.parse(productoJSON)); //Convertimos el texto en forma de objeto en un verdadero objeto, funciona siempre y cuando el texto tenga forma de arreglo