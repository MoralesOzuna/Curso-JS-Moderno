let elemento;


/* Podemos solucionar cualquier tipo de elemento con document */
elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;  /* Devuelve un HTML Collection */
elemento = document.forms[0].action;
elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].class; /* Devuelve la clase en formato string */

elemento = document.images;
elemento = document.scripts;


console.log(elemento);