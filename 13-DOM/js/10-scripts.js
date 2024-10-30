const enlace = document.createElement('A');

//Agregando el texto
enlace.textContent = 'Nuevo enlace';

//Añadiendo href
enlace.href = '/nuevo-enlace';
enlace.target = "_blank"
console.log(enlace);

enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');

//Un evento
enlace.onclick = mifuncion;


//Seleccionamos la navegacion
const navegacion = document.querySelector('.navegacion');
//En lugar de navegacion.appendchild(enlace);
navegacion.insertBefore(enlace, navegacion.children[1]); //Insert before nos agrega mas libertad sobre donde colocar el elemento, recibe 2 argumentos, el elemento y donde lo queremos mostrar


function mifuncion(){
    alert('Diste click');
}



//Creando un CARD

//Creando textos
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');


//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto alternativo';


//Crear el card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);
card.appendChild(info);

//Insertar en el html

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);

console.log(card);