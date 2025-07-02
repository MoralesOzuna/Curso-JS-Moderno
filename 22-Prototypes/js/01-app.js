/* EXISTEN DOS FORMAS DE CREAR OBJETOS

    OBJECT LITERAL Y OBJECT CONSTRCUTOR
*/

//Object literal
const cliente = {
    nombre: 'Juan',
    saldo: 500
}

//Object constructor mas reutilizable, nos permite crear múltiples objetos con la misma estructura y lógica sin tener que repetir código.

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('juan', 500);

console.log(juan);
