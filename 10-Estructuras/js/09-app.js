const autenticado = false;
const puedePagar = true;

//console.log( autenticado || puedePagar ? 'Sí puede pagar': 'No, no esta autenticado') // ? como el if. : es como el else

console.log( autenticado ? puedePagar ? 'Sí pesta auntenticado y puede pagar': 'Si autenticado, no puede pagar' : 'No, no esta autenticado');



const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalApagar = 5000;



/* if(efectivo > totalApagar || credito > totalApagar || disponible > totalApagar){ //Revisa que se cumpla ALGUNA de las opciones
   if(efectivo > totalApagar) {
    console.log('Sí pagaste con efectivo')
   } else{
    console.log('Utilizaste otro metodo de pago')
   }

} else{
    console.log('Fondos Insuficientes'); //Primer if, si no se cumple alguna condicion, es por fondos insuficientes
} */