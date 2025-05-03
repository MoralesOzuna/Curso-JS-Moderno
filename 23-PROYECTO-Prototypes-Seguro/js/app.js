//1. Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}


//2.Prototype de seguro
//Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function(){
    /* 
        1 = Americano 1.15
        2 = Asiatico = 1.05
        3 = Europeo = 1.35
    
    */

    let cantidad;
    const base = 2000;

    switch(this.marca){

        case '1':
            cantidad = base * 1.15
            break;

        case '2':
            cantidad = base * 1.05
            break;

        case '3':
            cantidad = base * 1.35
            break;

            default:
                break;
    }


    //Leer el año
    const diferencia = new Date().getFullYear() - this.year;

    //Cada año que la diferencia es mayor, el costo va a reducrise un 3%
    cantidad -= ((diferencia * 3) * cantidad)/100;

    /* 
        Si el seguro es basico se multiplica por un 30% más
        Si el seguro es completo se multiplica por un 50% más
    */

    if(this.tipo === 'basico'){
        cantidad *= 1.30;

    } else{
        cantidad *= 1.50;
    }

    return cantidad; //Devolvemos la cantidad final

}

function UI(){}

// 2. Creamos prototype para llenar las opciones de los años
UI.prototype.llenarOpciones = () =>{ //Normalmente al crear protos no utilizamos arrow funcionts, esta es una excepcion por no pasar datos
    const max = new Date().getFullYear();
        min = max - 20;

        const selectYear = document.querySelector('#year');


        for(let i = max; i > min; i--){
            let option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            selectYear.appendChild(option); //Agregamos las opciones de año al select
        }

}

UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    
    if(tipo === 'error'){
        div.classList.add('error')
    } else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado')); //Nuevo nodo y nodo de referencia donde quieres insertar el elemento


    setTimeout(() => {
        div.remove();
    }, 3000);
}


UI.prototype.mostrarResultado = (seguro, total) =>{

    const {marca, year, tipo } = seguro;

    let textoMarca
    switch(marca){
        case '1':
            textoMarca = 'Americano';
            break;

        case '2':
            textoMarca = 'Asiatico';
            break;


        case '3':
            textoMarca = 'Europeo';
            break;

        default:
            break;
    }
    //Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class = "header" > Tu Resumen </p>
        <p class = "font-bold">Marca: <span class= "font-normal"> ${textoMarca} </span> </p>
        <p class = "font-bold">Año: <span class= "font-normal"> ${year} </span> </p> 
        <p class = "font-bold">Tipo: <span class= "font-normal capitalize"> ${tipo} </span> </p> 
        <p class = "font-bold">Total: <span class= "font-normal"> $ ${total} </span> </p>
    `;

    const resultadoDiv = document.querySelector('#resultado');
  


    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';


    setTimeout(() =>{
        spinner.style.display = 'none'; //Se borra el spinner 
        resultadoDiv.appendChild(div); //Pero se muestra el resultado
    }, 3000)

}

// 3. instanciar UI
const ui = new UI(); //Es decir creamos un nuevo objeto de la clase particular UI
    /*
        ES COMO HACER LO SIGUIENTE, 
            const jose = new Persona('Juan', 5000, 6643501694);  
        PERO AL NO TENER UI PARAMETROS A RECIBIR, SOLO CREAMOS LA NUEVA INSTANCIA SIMPLE
        */


document.addEventListener('DOMContentLoaded', () =>{
    ui.llenarOpciones() // llena el select con los años

    
})

eventListeners();
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro); //Los selectores no es tan recomendable colocarlos en prototypes
}

function cotizarSeguro(e){

    e.preventDefault();
    //Leer la marca seleccionada

    const marca = document.querySelector('#marca').value;

    //Leer el año seleccionado

    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name = "tipo"]:checked').value; //Leer un input de tipo radio
    

    if(marca === '' || year === '' || tipo ==  ''){
        console.log('No paso la validacion');
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;  
    } 
    ui.mostrarMensaje('Cotizando...', 'exito');


    //Ocultar las cotizaciones previas

    const resultados = document.querySelector('#resultado div');

    if(resultados != null){ //si resultados es diferente a null es porque hay algo
        resultados.remove(); //elimina resultados
    }

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    //Utilizar el prototype que va a cotizar
    ui.mostrarResultado(seguro, total);
    
 
}



/* 🧱 Estructura General del Proyecto
Modelo (Seguro):
Se encarga de la lógica de negocio (calcular el precio del seguro).

Vista (UI):
Maneja todo lo relacionado con el DOM: mostrar años, mensajes, y resultados.

Controlador (cotizarSeguro, eventListeners):
Coordina la interacción del usuario con la lógica y la vista.

🧠 Paso a Paso del Flujo
Al cargar la página (DOMContentLoaded):

Se llama a ui.llenarOpciones() para llenar el <select> con los últimos 20 años.

Cuando el usuario envía el formulario (submit):

Se ejecuta la función cotizarSeguro.

Dentro de cotizarSeguro:

Se leen los datos del formulario: marca, año, tipo.

Se valida que todos los campos estén llenos.

Si hay error, se muestra un mensaje con ui.mostrarMensaje('error').

Si todo está bien:

Se crea un objeto Seguro con los datos.

Se llama a seguro.cotizarSeguro() para obtener el total.

Se muestra el mensaje y el resultado con ui.mostrarResultado(...).

 */