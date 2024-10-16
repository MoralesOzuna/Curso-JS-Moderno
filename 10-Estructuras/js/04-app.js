//Operador Mayor que y Menor que
const dinero = 400;
const totalApagar = 500;
const tarjeta = false;
const cheque = false;


if( dinero >= totalApagar ){
    console.log('Sí podemos pagar');

} else if(tarjeta){
    console.log('Si puedo pagar porque tengo la tarjeta');
} else if(cheque){
    console.log('Si puedo pagar porque tengo un cheque')
} else{ //else se ejecuta cuando ninguna de las condiciones previas se cumple
    console.log('No podemos pagar');
}