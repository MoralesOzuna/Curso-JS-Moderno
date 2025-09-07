/* Weakmap
    Este tipo de estructura se utiliza para guardar propiedades temporales que solo se consultaran un par de ocasiones y posteriormente el "garbage collector" (Que es un mecanimso de javascript para liberar memoria cuando un objeto ya no es accesible en el programa)

    No itera.
    No puedes ver el size
    Solo aceptan objetos 

*/
 const producto = {
    idProducto : 10
} 

const weakmap = new WeakMap();


weakmap.set(producto, 'Monitor');

console.log(weakmap.has(producto));
console.log(weakmap.get(producto));
console.log(weakmap.delete(producto));