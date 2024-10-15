const numeros = [10, 20, 30, 40, 50, [1,2,3], {mensaje1: 'hola', mensaje2: 'esto es un arreglo'}  ];
console.table(numeros);


//Para acceder a un valor, accedemos a su posicion

//Accediendo a la posicion del numero 30
console.log(numeros[2]);
console.log(numeros[5][0]); //Accedo al numero 2 del arreglo interior
console.log(numeros[6].mensaje2); //Accedo al valor de la propiedad del objeto "mensaje2"
console.log(Object.keys(numeros[6])); //Accedo a las keys del objeto
