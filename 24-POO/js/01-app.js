//Tipos de clases
//Class declaration
class Cliente {

    //El constructor es un método especial en una clase que se utiliza para crear e inicializar objetos a partir de dicha clase. 
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}
//Instanciamos la clase. Instanciar se refiere al proceso de crear un objeto a partir de una clase.
const jose = new Cliente('juan', 400)

console.log(jose);


//Class expression
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}



const jose2 = new Cliente2('juan', 400);

const empresa = new Empresa('Codigo con Juan', 500);
console.log(empresa);