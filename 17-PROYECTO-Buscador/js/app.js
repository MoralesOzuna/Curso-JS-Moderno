//variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");


//contenedor para los resultados
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear(); //obtenemos el año actual
const min = max - 10;

//Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


//eventos
document.addEventListener('DOMContentLoaded', () =>{
    //autos por otro lado
    mostrarAutos(autos); //Muestra los autos al cargar

    //llena las opciones de años
    llenarSelect();


})


//Event listeners para los select de busqueda
marca.addEventListener('change', e =>{ //evento change se activa al momento de seleccionar una opcion en un select
    /* console.log(e.target.value) */
    datosBusqueda.marca = e.target.value;


    filtrarAuto();
  
})

year.addEventListener('change', e =>{ //evento change se activa al momento de seleccionar una opcion en un select
    /* console.log(e.target.value) */

    //convertimos el dato del formulario a int para poder hacer la comparacion con el dato en el objeto
    datosBusqueda.year = parseInt(e.target.value); //e.target.value es la opcion que elegims en el selecto

    filtrarAuto();
  
})

minimo.addEventListener('change', e =>{ //evento change se activa al momento de seleccionar una opcion en un select
    /* console.log(e.target.value) */
    datosBusqueda.minimo = e.target.value;

    filtrarAuto()
  
})

maximo.addEventListener('change', e =>{ //evento change se activa al momento de seleccionar una opcion en un select
    /* console.log(e.target.value) */
    datosBusqueda.maximo = e.target.value;

    filtrarAuto()
  
})

puertas.addEventListener('change', e =>{ //evento change se activa al momento de seleccionar una opcion en un select
    /* console.log(e.target.value) */
    datosBusqueda.puertas = parseInt(e.target.value);

    
    filtrarAuto()
  
})

transmision.addEventListener('change', e =>{ //evento change se activa al momento de seleccionar una opcion en un select
    /* console.log(e.target.value) */
    datosBusqueda.transmision = e.target.value;
    filtrarAuto()
  
})

color.addEventListener('change', e =>{ //evento change se activa al momento de seleccionar una opcion en un select
    /* console.log(e.target.value) */
    datosBusqueda.color = e.target.value; 
    filtrarAuto()

  
})



//funciones
function mostrarAutos(autos){ //autos es el resultado del filter en la funcion filtrarAuto()

    LimpiarHTML(); //elimina el html previo
    autos.forEach( auto =>{

        const { marca, modelo, year, puertas, transmision, color, precio } = auto; //esto me evita de colocar ${auto.marca}, ${auto.year} etc
        const autoHTML = document.createElement('p');

        autoHTML.textContent =  `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        
        `;

        //insertar en el html

        resultado.appendChild(autoHTML);
    })
}

//LimpiarHTML
function LimpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

/* Genera los años del select */

function llenarSelect(){

    //agregamos contenido al select de año
    for (let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

//funcion que filtra en base a la busqueda
function filtrarAuto(){
    //funcion de alto nivel son funciones que toman otra funcion
    //autos el objeto en db

    //console.log(resultado)
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)//autos.filter( (auto) =>{   }) en lugar de que sea de esta manera. Tomamos "auto de la funcion filtrarMarca"
    mostrarAutos(resultado); //pasamos el resultado de los filtros



    if(resultado.length){
        mostrarAutos(resultado); //pasamos el resultado de los filtros
    } else{
        noResultado();
    }
}

function noResultado(){
    LimpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);
}
//auto es el objeto que devuelve el filter o sobre el que se itera
function filtrarMarca(auto){
    const {marca } =datosBusqueda;
    if(marca){
        return auto.marca === marca; //auto.marca donde auto es lo que se itera
    }
    return auto; //si los valores no estan filtrados, devuelve todos los datos
}


function filtrarYear(auto){
    const { year } = datosBusqueda;

    if(year){
        return auto.year === year; //auto.marca donde auto es lo que se itera, esto filtra los resultados que devuelve segun la condicion
    }
    return auto; //si los valores no estan filtrados, devuelve todos los datos
}

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;

    if(minimo){
        return auto.precio >= minimo; //auto.marca donde auto es lo que se itera, esto filtra los resultados que devuelve segun la condicion
    }
    return auto; //si los valores no estan filtrados, devuelve todos los datos
}

function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;

    if(maximo){
        return auto.precio <= maximo; //auto.marca donde auto es lo que se itera, esto filtra los resultados que devuelve segun la condicion
    }
    return auto; //si los valores no estan filtrados, devuelve todos los datos
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;

    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}


function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;

    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda;


    if(color){
        return auto.color === color;
    }
    return auto;
}