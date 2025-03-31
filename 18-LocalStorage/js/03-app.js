/* Eliminar elementos del localStorage */

localStorage.removeItem('nombre');


//Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('MESES')); //obtenemos del local storage MESES convertido en objeto y guardado en mesesArray
console.log(mesesArray);
mesesArray.push('Nuevo Mes2'); //Agregamos a mesesArray un nuevo elemento
console.log(mesesArray);

localStorage.setItem('MESES', JSON.stringify(mesesArray)); //sustituimos el texto MESES guardado en el localStorage


//Elimina todo lo guardado en localStorage
localStorage.clear();