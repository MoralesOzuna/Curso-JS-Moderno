//Switch case


const metodoPago = 'efectivo';

switch(metodoPago){

    case 'efectivo':
        pagar();
        break;

    case 'cheque':
        console.log(`pagaste con ${metodoPago}`);
        break;

    case 'tarjeta':
        console.log(`pagaste con ${tarjeta}`)

    default:
        console.log('Aún no has seleccionado un método de pago o método de pago no soportado');
        break;
        
}

function pagar(){
    console.log('Pagando...')
}