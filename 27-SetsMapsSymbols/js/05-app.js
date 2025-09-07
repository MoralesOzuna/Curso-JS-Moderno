/* Symbol 
    Su característica principal es que cada valor Symbol es único e irrepetible, aunque tengan la misma descripción.

    Se suele usar para crear propiedades “ocultas” en objetos, es decir, propiedades que no colisionen con otras y que no aparezcan fácilmente al recorrer el objeto.

    Los Symbols son ideales cuando necesitas claves únicas en objetos o cuando quieres propiedades ocultas que no interfieran con otras.

*/

const sym = Symbol();
const sym2 = Symbol();


if(sym === sym2){
    console.log('son iguales');
} else{
    console.log('Son diferentes'); //Una caracteristica es que estos datos nunca son igual
}

const nombre = Symbol();
const apellido = Symbol();


const persona = {};

//Agregar nombre y apellido como llaves del objeto

persona [nombre] = 'Juan';
persona[apellido] = 'Jose';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona)
console.log(persona[nombre]); //Acceder a las propiedades mediante un corchete en lugar de persona.nombre


//Las propiedades que utilizan un symbol no son iterables
for(let i in persona){
    console.log(i);
}

//Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};


cliente[nombreCliente] = 'Pedro';
console.log(cliente); //Accedes a llave con descripcion
console.log(cliente[nombreCliente]); //Accedes solo al valor