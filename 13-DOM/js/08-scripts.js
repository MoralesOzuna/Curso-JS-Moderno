/* Traversing the doom: navegar el DOM mediante los mismos elementos */


const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

/*
console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
console.log(navegacion.children); //Children unicamente enlista los elementos html


console.log(navegacion.children[1].nodeName); //Devuelve a de enlace
console.log(navegacion.children[1].nodeType); //Retorna 1, que es un elemento


 */


const card = document.querySelector('.card');
console.log(card.children[1].children[1].textContent); //Me traen los hijos de la posicion[1]


card.children[1].children[1].textContent = 'Nuevo Heading desde Traversing the DOM';
card.children[0].src = 'img/hacer3.jpg'; //Cambiando el src de la imagen

console.log(card.children[0]);


//Traversing The Hijo al Padre

console.log(card.parentElement.parentElement.parentElement);


console.log(card.nextElementSibling); //Nos proporciona el siguiente elemnto igual


console.log(card.nextElementSibling.nextElementSibling); //Nos proporciona el siguiente elemnto igual



const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling); //Selecciona el elemento de atras en el HTML
