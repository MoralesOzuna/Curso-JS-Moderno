//Variables
const carrito = document.querySelector('#carrito'); /* div que contiene el contenido del carrito  */
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); /* /t body donde se insertaran los productos */
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
const listaCursos = document.querySelector('#lista-cursos'); /* Listado de cursos en la pagina */
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners(){

    //Cuando agregas un curso presionando "Agregar al carrito'"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito

    carrito.addEventListener('click', eliminarCurso);


    //Muestra los cursos de local Storage
    document.addEventListener('DOMContentLoaded', () =>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [] ;

        carritoHTML();
    })



    //Vaciar el carrito

    vaciarCarritoBtn.addEventListener('click', () =>{
        console.log('Vaciando carrito...');

        articulosCarrito = []; //Reseteamos el arreglo
        carritoHTML();
        limpiarHTML(); //Eliminamos todo el html
    })
}


//Funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){ /* agregar-carrito es la clase del boton */
        const cursoSeleccionado = e.target.parentElement.parentElement; //Traversting the doom //accedemos al div del producto, para ir accediendo posteriormente a toda la informacion
        leerDatosCurso(cursoSeleccionado);
    }


}

//Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //REVISAR SI UN ELEMENTO TIENE MAS DE UNA CANTIDAD EN EL CARRITO

        const cantidad = articulosCarrito.some( curso => curso.cantidad > 1);

        if(cantidad){
            articulosCarrito.map(curso =>{
                if(curso.cantidad > 1){
                    curso.cantidad--;
                    return curso;
                } 
            })
        
        } else{

            articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
            
        }

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){

    //Crear un objeto con el contenido del curso seleccionado
    const infoCurso = {
        imagen:  curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent, //utilzando la referencia del curso seleccionado
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id); 
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                console.log('se actualiza cantidad')
                return curso; //retorna el objeto actualizado
            } else{
                console.log('Se regresan las cantidades que no fueron modificadas')
                return curso; //retorna el objeto sin modificaciones
                
            }
        });

        articulosCarrito = [...cursos];

    }else{
        //agregamos el curso al carrito
        //Agrega elementos al arreglo de carrito
        console.log('Se agrega por primera vez al carrito')
        articulosCarrito = [...articulosCarrito, infoCurso]; //se toma la referencia de articulosCarrito para no perder esa referencia
    }


    carritoHTML();
}

//Muestra el carrito de compras en el HTML
/* table
tr = table row
th = table heading
td = table data (create a column) */

function carritoHTML(){

    //Limpiar el html previo
    limpiarHTML();
    //Recorre el carrito y genera el html

    articulosCarrito.forEach( curso =>{
        //destructuring
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src = "${imagen}" width = "100"

        <td>

        <td>${titulo}</td>
        <td> ${precio}</td>
        <td> ${cantidad}</td>
        <td>
            <a href ="#" class = "borrar-curso" data-id = "${id}" > X </a> 
        </td>`



        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    });

    //Agregqar el carrito de compras al storage

    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


//Elimina los cursos del tbody

function limpiarHTML(){
    //FORMA LENTA
    //contenedorCarrito.innerHTML = '';

    //Elimina los hijos de contenedor carrito si es que hay
    while(contenedorCarrito.firstChild){ //si el contenedor carrito tiene un hijo
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}