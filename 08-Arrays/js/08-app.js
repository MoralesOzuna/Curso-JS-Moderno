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
const { nombre /* crea la variable y la extrae en el mismo paso */ } = producto;

console.log(nombre);


//Destructuring con arreglo
const numeros = [10, 20, 30, 40, 50];
const [primero, segundo, tercero] = numeros; //Obtienes la primera posicion, el numero 10
const [ , , , cuarto] = numeros; //Obtenemos solo la posicion 4, sin crear las otras tres variables

//Utilizando el rest operator para partir un arreglo en la mitad

const[uno, dos, ...tres] = numeros; //obtengo 10, 20 y separo en un solo arreglo 30,40 y 50


console.log(tercero);
console.log(cuarto);
console.log(tres);


