/* Maps son listas de llave y valor.
    Para listas largas de datos es recomendable por perfomance utilizar maps sobre objects.
    Es una ventaja que en los maps puedes colocar cualquier tipo de dato como llave, a diferencia de los objects que aceptan solo strings

    🔑 Idea clave:
    Un Map no soporta múltiples valores por la misma clave directamente. Cada clave (llave) es unica

 */


const cliente =  new Map();

cliente.set('nombre', 'karen');
cliente.set('tipo', 'premium');
cliente.set('saldo', 3000);



//Obteniendo tamano, llave, dato, eliminar, limpiar
console.log(cliente.size);
console.log(cliente.has('nombre2')); //Retorna si x elemento existe
console.log(cliente.get('nombre')); //Obtienes valor
cliente.delete('saldo'); //Borras valor
cliente.clear();

//Los maps puedes inicializarse con valor
const paciente = new Map( [ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);
paciente.set('dr', 'Dr Asignado'); //Agregamos una nueva llave y valor
paciente.set('nombre', 'Jose eduardo reescrito');  //Tomando la llave del map puedes reescribir el valor

paciente.forEach( (datos, index) =>{
    console.log(index, datos )
})

console.log(paciente);

