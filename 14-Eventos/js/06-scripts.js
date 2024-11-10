//Event bubbling es cuando el evento de un elemento se propaga a otros
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click', e =>{
    e.stopPropagation(); //detiene el event bubling
    console.log('click en card')
});

infoDiv.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('click en info')
});


titulo.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('click en titulo')
});