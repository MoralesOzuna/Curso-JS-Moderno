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
        this.calcularRestante();
    }

    calcularRestante(){
     
        /* 
        Reduce itera sobre los elementos y devuelve un gran total
            Total es el parametro que acumula todo 
            gasto es el objeto actual
            => total se empieza a calcular con la suma de gasto.cantidad
            la cual comienza en 0
        */
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0 ); 
        this.restante = this.presupuesto - gastado;
        
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter( gasto => gasto.id !== id);
        console.log(this.gastos);
        this.calcularRestante();
    }
}

class UI{

    insertarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad; //Destructuring para datos de cantidad
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

    mostrarGastos(gastos){

        limpiarHTML();
        //iterar sobre los gastos


        gastos.forEach(gasto =>{
            const {cantidad, nombre, id} = gasto;

            //Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id; /* Es lo mismo que nuevoGasto.setAttribute('data-id', id) pero en la nueva version se utiliza la otra forma */

            //Agregar el HTML del gasto
            nuevoGasto.innerHTML =  `${nombre} <span class = "badge badge-primary badge-pill"> $ ${cantidad} </span>`;
            //Boton para borrar gasto

            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';

            btnBorrar.onclick = () =>{
                eliminarGasto(id);
            }

            nuevoGasto.appendChild(btnBorrar);

            gastoListado.appendChild(nuevoGasto);
        })

    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        //Comprobar 25%

        if((presupuesto / 4) > restante){100100
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if( (presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else{
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }


        //Si el total es 0 O MENOR
        
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type = "submit"]').disabled = true;
        }
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
    const {gastos, restante} = presupuesto; //Aplicamos destructuring para extraer los gastos
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    //Reinicia el formulario
    formulario.reset();


}

function limpiarHTML(){
    /* gastoListado.innerHTML = ``; manera funcional pero no recomedable*/
    while(gastoListado.firstChild){
        gastoListado.removeChild(gastoListado.firstChild)

    }
}

function eliminarGasto(id){

    //Elimina gastos del objeto
    presupuesto.eliminarGasto(id);

    //Elimina los gastos
    const {gastos, restante} = presupuesto
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);

}