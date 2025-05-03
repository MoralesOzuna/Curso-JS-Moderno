//object constructor
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// Creamos un nuevo prototype exclusivo para cliente (En pocas palabras una nueva clase exclusiva)

 //No se puede  utilizar arrow functions ya que estas buscan en la ventana global y para acceder a this.nombre etc marcarian undefinded
Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    } else if(this.saldo > 5000 ){
        tipo = 'Platinum';
    } else{
        tipo = 'Normal';
    }

    return tipo;
}


Cliente.prototype.nombreClienteSaldo = function(){
    // ${this.tipoCliente()} hace referencia al mismo prototype tipoCliente
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, tipo Cliente: ${this.tipoCliente()}` 
}


Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}


//Constructor de persona
function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo); //Manda a llamar una funcion
    /* En lugar de repetir este codigo, heredamos de Cliente propiedades que vamos a reutilizar
    this.nombre = nombre;
    this.saldo = saldo; */
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype); //Es una funcion diseñada para copiar el prototype y asignarlo a otra funcion, en este caso queremos heredad las clases

Persona.prototype.constructor = Persona ;


//instanciarlo
const jose = new Persona('Juan', 5000, 6643501694);
console.log(jose);
console.log(jose.nombreClienteSaldo());


