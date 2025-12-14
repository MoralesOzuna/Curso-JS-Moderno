const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedasSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado')


const objBusqueda = {
    moneda: '',
    criptomoneda : ''
}
//Crear promise

/* 1. Definimos una express function */
const obtenerCriptomonedas = (criptomonedas =>  //criptomonedas es el parametro recibido de resultado.Data
    new Promise (resolve =>{
    resolve(criptomonedas); //resolvemos la promesa con el mismo valor
}))


document.addEventListener('DOMContentLoaded',()=>{
    consultarCriptomonedas();  


    formulario.addEventListener('submit', submitFormulario);

    criptomonedasSelect.addEventListener('change', leerValor);
    monedasSelect.addEventListener('change', leerValor);
})

function consultarCriptomonedas(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'; //Obtenemos las criptomonedas más importantes


    fetch(url)
        .then (respuesta => respuesta.json())
        .then (resultado => obtenerCriptomonedas(resultado.Data))
        .then (criptomonedas =>selectCriptomonedas(criptomonedas))
}


function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(cripto=>{
        const{FullName, Name} = cripto.CoinInfo; //Extraemos los valores

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;


        criptomonedasSelect.appendChild(option);
    })
}
function leerValor(e){ 
    objBusqueda[e.target.name] = e.target.value; //e.target.name tiene en el html la palabra criptomoneda, entonces accedo a objBusqueda.criptomoneda y le coloco el valor que ingrese en el formulario de criptomoneda
    console.log(objBusqueda)

}
function submitFormulario(e){
    e.preventDefault();

    //Validar
    const {moneda, criptomoneda} = objBusqueda;
    
    if(moneda ==='' || criptomoneda===''){
        mostrarAlerta('Ambos campos son obligtorios');
        return;
    }

    //Consutlar la API con los resultados
    consultarApi();
}


function mostrarAlerta(msg){
    const existeError = document.querySelector('.error');

    if(!existeError){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');


        //Mensaje de error
        divMensaje.textContent = msg;
        formulario.appendChild(divMensaje);


        setTimeout(()=>{
            divMensaje.remove()
        }, 2000);
        }   


}

function consultarApi(){
    const {moneda, criptomoneda} = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    setTimeout(() => {
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(cotizacion => mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]));
    }, 3000);

    
        
}


function mostrarCotizacionHTML(cotizacion){
    limpiarHTML();
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;


    const precio = document.createElement('P');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;


    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `</p>Precio más alto del día: <span>${HIGHDAY}</span>  </p>`;


    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `</p>Precio más bajo del día: <span>${LOWDAY}</span>  </p>`;

    const ultimasHoras = document.createElement('P');
    ultimasHoras.innerHTML = `</p>Variación ultimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>  </p>`;
    
    const ultimaActualización = document.createElement('P');
    ultimaActualización.innerHTML = `</p> Ultima actualización: <span>${LASTUPDATE}</span>  </p>`;


    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualización);
}


function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner(){
    limpiarHTML();

    const spinner = document.createElement('DIV');
    spinner.classList.add('spinner');

    spinner.innerHTML = `

        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>

    `
    resultado.appendChild(spinner);

    
}


