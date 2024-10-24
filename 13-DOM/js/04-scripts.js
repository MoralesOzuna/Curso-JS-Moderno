const card = document.querySelector('.card'); //Solo retorna el primero que encuentre
console.log(card);

//Podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//Seleccionar el formulario

const formulario = document.querySelector('#formulario');
console.log(formulario);


//Seleccionar elementos HTML

const navegacion = document.querySelector('nav'); //Etiqueta de nav
console.log(navegacion);