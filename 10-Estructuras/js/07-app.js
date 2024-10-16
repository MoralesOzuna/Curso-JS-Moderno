const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalApagar = 600;


if(efectivo > totalApagar || credito > totalApagar || disponible > totalApagar){ //Revisa que se cumpla ALGUNA de las opciones
    console.log('Si podemos pagar')
} else{
    console.log('Fondos Insuficientes')
}