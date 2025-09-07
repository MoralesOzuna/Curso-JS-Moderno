/* Esto es como se realiza un iterador como for, while, etc */
function crearIterador(carrito){
    let i = 0;

    return{
        siguiente: () =>{
            const fin = (i >= carrito.length);//ACLARION: Los parentesis no significan algo, son unicamente para mejorar la legibilidad
            const valor = !fin ?  carrito[i++] : undefined; //if(!fin); (lees una vez carrito, y lo aumentas al finalizar la linea): si !fin es false devuelve undefined

            return {
                fin,
                valor
            }
        }
      
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

//Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
