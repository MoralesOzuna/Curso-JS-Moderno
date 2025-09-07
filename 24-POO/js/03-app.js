//HERENCIA

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



//Herencia

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo); /* Acude a la clase padre y hereda los atributos del constructor*/
        this.telefono = telefono;
        this.categoria = categoria;
    }
    //reescribes un metodo ya existente o cambiamos su valor etc
     static bienvenida(){
        return `Bienvenido al cajero de empresas`
    }
}

const empresa = new Empresa('Codigo con Juan', 500, 664568877282, 'Aprendizaje en linea');
console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenida())
console.log(Empresa.bienvenida());