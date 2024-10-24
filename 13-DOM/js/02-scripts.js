//Seleccionar elementos por su clase...

const header = document.getElementsByClassName('header');
const hero = document.getElementsByClassName('hero');


console.log(header);
console.log(hero);

//Si las clases existen más de una vez

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


//Si una clase no existe

const noExiste = document.getElementsByClassName('No existe');
console.log(noExiste); //Retorna un arreglo vacio