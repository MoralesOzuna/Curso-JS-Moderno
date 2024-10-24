const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);





console.log(encabezado.innerText); //Al utilizar visibility: hidden, no encuentra un texto que esta oculto
console.log(encabezado.textContent); //Si encuentra el texto aun utilizando visibility: hidden


console.log(encabezado.innerHTML); //Se trae el texto junto con el HTML



const nuevoHeading = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'; //Ejemplo de modificacion de la imagen
console.log(imagen);