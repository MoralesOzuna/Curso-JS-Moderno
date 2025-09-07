//Clases privadas
class Cliente {

    //Definimos que una propiedad sera privada
    #nombre;
    //El constructor es un método especial en una clase que se utiliza para crear e inicializar objetos a partir de dicha clase. 
    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    //estas clases estaticas para mostrar no ocupa instancian
    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

const juan = new Cliente('Juan', 200); 
/* Funciona porque accedo desde la clase */
console.log(juan); //Accedo al objeto
console.log(juan.mostrarInformacion()); //
/* console.log(juan.#nombre); Esto marca error, ya que intento acceder a la propiedad desde fuera de la clase*/


class Cliente2{
    #nombre;

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

}


const jose = new Cliente2();
jose.setNombre('Jose');
console.log(jose.getNombre()); //Accedemos a esta propiedad privada desde la clase
console.log(juan.#nombre); //No podemos acceder desde el objeto