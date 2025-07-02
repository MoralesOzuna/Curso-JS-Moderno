//Hay dos tipos de clases

//Class declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}
//Instanciamos la clase
const jose = new Cliente('juan', 400)

console.log(jose);


//Class expression
const Cliente2 = class{
    
}

const jose2 = new Cliente2('juan', 400);
console.log(jose2);