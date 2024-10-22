const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];


//Unir arreglos

const resultado = meses.concat(meses2, meses3, 'Otro Mes'); //Concatena el elemento string 'Otro mes'

console.log(resultado);


//spread operator

const resultado2 = [...meses, ...meses2, ...meses3, ... 'Otro mes']; /* Concatena letra por letra el estring al usar el spread operator */
console.log(resultado2);