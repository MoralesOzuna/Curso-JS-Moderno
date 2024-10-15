const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);

//Modificamos la primera posicion del arreglo 
//Aunque sean variables constantes, tanto los objetos y los arreglos se pueden reescribir
meses[0] = 'Nuevo mes';

console.table(meses);
