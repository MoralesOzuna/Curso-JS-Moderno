//CLASES ESTATICAS

//Class declaration
class Cliente {

    //El constructor es un método especial en una clase que se utiliza para crear e inicializar objetos a partir de dicha clase. 
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    //estas clases estaticas para mostrar no ocupa instancian
    static bienvenida(){
        return `Bienvenido al cajero`
    }
}
//Instanciamos la clase. Instanciar se refiere al proceso de crear un objeto a partir de una clase.
const jose = new Cliente('juan', 400);
console.log(jose.mostrarInformacion());
console.log(Cliente.bienvenida() );
console.log(jose.bienvenida());


//Class expression
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = nombre;;
    }
    mostrarInformacion(){
        return `Cliente 2: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

}

const jose2 = new Cliente2('juan', 400);
console.log(jose2);