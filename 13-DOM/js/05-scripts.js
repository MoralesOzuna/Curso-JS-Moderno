//querySelectorAll te devuelve todos los elementos, a diferencia de querySelector


card = document.querySelectorAll('.card');
console.log(card);

//Aunque sea mala practica tener dos id, funciona

const formulario = document.querySelectorAll('#formulario');
console.log(formulario);


//Si un elemento no existe

const noExiste = document.querySelectorAll('NoExiste');
console.log(noExiste); //Nodelist vacio