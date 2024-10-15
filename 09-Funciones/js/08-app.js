//Funciones que retornan valores

function sumar(a, b){
    return a + b; //Esto se asigna a resultado
}

const resultado = sumar(2,3);

console.log(resultado);

//Ejemplo mas avanzadp

let total = 0;
function agregarCarrito(precio){
    return total += precio; //Voy acumulando el parametro precio que obtengo y lo guardo en la variable total
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(300); //estamos agregando 300 como argumento al parametro precio
total = agregarCarrito(100);
total = agregarCarrito(600);


const totalPagar = calcularImpuesto(total);


console.log(`El total a pagar es de ${totalPagar}`)


console.log(total);