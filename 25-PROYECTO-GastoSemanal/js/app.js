//VARIABLES Y SELECTORES
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul')

//EVENTOS
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}


//CLASES
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        
    }
}

class UI{

    insertarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    };

    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else{
            divMensaje.classList.add('alert-success')
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        document.querySelector('.primario').insertBefore(divMensaje,formulario); 

        //quitar del HTML

        setTimeout(() => {
            divMensaje.remove();
        },3000);
    }

    agregarGastoListado(gastos){

        limpiarHTML();
        //iterar sobre los gastos


        gastos.forEach(gasto =>{
            const {cantidad, nombre, id} = gasto;

            //Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id; /* Es lo mismo que nuevoGasto.setAttribute('data-id', id) pero en la nueva version se utiliza la otra forma */

            //Agregar el HTML del gasto
            nuevoGasto.innerHTML =  `${nombre} <span class = "badge badge-primary badge-pill"> ${cantidad} </span>`;
            //Boton para borrar gasto

            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';

            nuevoGasto.appendChild(btnBorrar);

            gastoListado.appendChild(nuevoGasto);
        })

    }
}   

//Instanciar
let ui = new UI();

//Se coloca globalmente y en preguntarPresupuesto se asigna su valor
let presupuesto;



//FUNCIONES

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cúal es tu presupuesto?');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){ 
        window.location.reload(); //recarga la ventana actual
    }

    //presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    console.log(presupuesto);
    ui.insertarPresupuesto(presupuesto);

}


function agregarGasto(e){
    e.preventDefault();

    //Leer los datos del formulario

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === '' ){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if( cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error')
        return;
    }

    //Generar un objeto con el gasto
    /* Object literal enhancement es lo contrario al destructuring de datos, aqui unes nombre y cantidad al objeto de gasto */
    const gasto = {nombre, cantidad, id: Date.now()}; 

    /* Esto se representade esta manera, nombre: nombre no hace falta colocarlo como llave y valor ya que son iguales, entonces puedes pasar solo uno
    
    gasto = {
    nombre: nombre;
    cantidad: cantidad
    id: Date.now()
    } */


    //Añade nuevo gasto
    presupuesto.nuevoGasto(gasto);
    ui.imprimirAlerta('Gasto agregado correctamente');


    //Imprimir los gasto
    const {gastos} = presupuesto; //Aplicamos destructuring para extraer los gastos
    ui.agregarGastoListado(gastos);

    //Reinicia el formulario
    formulario.reset();


}

function limpiarHTML(){
    /* gastoListado.innerHTML = ``; manera funcional pero no recomedable*/
    while(gastoListado.firstChild){
        gastoListado.removeChild(gastoListado.firstChild)

    }
}