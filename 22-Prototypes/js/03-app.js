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


//Instanciarlo (Es basicamente agregarle datos al objeto)
const pedro = new Cliente ('Pedro', 5001);
console.log(pedro.tipoCliente()); //utilizamos el prototype tipoCliente creado para Cliente
console.log(pedro.nombreClienteSaldo());


pedro.retiraSaldo(1000)
console.log(pedro.nombreClienteSaldo());

console.log(pedro);

