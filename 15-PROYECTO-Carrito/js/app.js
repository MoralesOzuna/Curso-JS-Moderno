//Variables

const carrito = document.querySelector('#carrito'); //tiene basicamente todo el contenido de carrito
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); //El body del carrito
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); //Boton de vaciar carrito
const listaCursos = document.querySelector('#lista-cursos'); //Listado de todos los cursos en la pagina principal
let articulosCarrito = [];



cargarEventListeners();

function cargarEventListeners(){ //Se crea esta funcion ya que va a ver diferentes listeners
    //Cuando agregas un curso presionando el boton "agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito

    carrito.addEventListener( 'click', eliminarCurso);


    //Vaciar el carrito

    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito = [];
        limpiarHTML(); //Eliminamos todo el HTML
    })
}


// Funciones
function agregarCurso(e){
    e.preventDefault();


    if(e.target.classList.contains('agregar-carrito') ){ 
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado)
    }
}

//Elimina un curso del carrito

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del areglo de articulos Carrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => {

            if(curso.id === cursoId){
                curso.cantidad --;

                if(curso.cantidad < 1){
                    delete curso;
                }
                else{
                    return curso
                }
            }
            else{
                return curso
            }
        });


    
        carritoHTML(); //iterar sobre el crrito y mostrar su HTML
            

    

    }
}

     




//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }


    //Revisa si un elemento ya existe en el carrito

    //.some(curso iteramos sobre cada curso en articulos carrito
    //.curso =>curso.id //Curso id toma el id de cada CURSO ITERADO
    //curso.id ===infoCurso.id Lo compara con infoCurso.id (osea el nuevo que se agregara)
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);  //some nos permite recorrer un arreglo de objetos para verificar si un elemento ya existe en el
    if(existe) {
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            } else{
                return curso; //retorna los objetos que no son los duplicados
            }
        } );

        articulosCarrito = [...cursos];
    } else{
        //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso]; /* ...articulosCarrito hace una copia del mismo array, para que al agregar un nuevo elemento, no se borren los anteriores */
    }

    console.log(infoCurso);
    console.log(articulosCarrito);

    carritoHTML();
}


//Muestra el Carrito de compras en el HTML
function carritoHTML(){

    //Limpiar el HTML
    limpiarHTML();
    
    
    articulosCarrito.forEach( curso =>{
        //Esto proviene del objeto infoCurso
        const {imagen, titulo, precio, cantidad, id} = curso; //Destructuring para utilizar las propiedades sin el "curso." ejemplo "curso.imagen"

        //Recorre el carrito y genera el HTML
        const row = document.createElement('tr'); //tr es un elemento de una tabla

        row.innerHTML = `
            <td>
                <img src = "${imagen}" width = "100">
            </td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>

            <td>
                <a href = "#" class = "borrar-curso" data-id = "${id}"> X </a> 
            </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

//Elimina los cursos del tbody

function limpiarHTML(){
    /* forma lenta
    contenedorCarrito.innerHTML = ''; */

    //un ciclo while consume menos recursos que el método innerHTML
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}