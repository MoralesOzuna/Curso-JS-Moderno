let cliente = {
    mesa: '',
    hora: '',
    pedido: ''
};



const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);


function guardarCliente(){
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //Revisar si hay campos vacios
    const camposVacios = [mesa, hora].some(campo => campo === '');


    if(camposVacios){

        //Verificar si hay una alerta

        const existeAlerta = document.querySelector('.invalid-feedback');

        if(!existeAlerta){
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(()=>{
                alerta.remove();
            }, 3000)
        }
    }
    /* Object property ShortHand, es como escribir lo siguinete
     cliente = {
        mesa: mesa,
        hora: hora
    }; */


    cliente = {...cliente, mesa, hora} //Se usa el spread operator() ...cliente para copiar el objeto completo y no perder pedido    

    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();


    //MOstrar las secciones
    mostrarSecciones();


}


function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}