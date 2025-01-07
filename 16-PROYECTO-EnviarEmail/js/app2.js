//Se ejecuta despues de descargar el contenido HTML O DOM 
document.addEventListener('DOMContentLoaded', function() {

    //Seleccionar los elementos de la interaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //Asignar eventos

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    
    
    function validar(e){
        console.log(e.target);
        if(e.target.value.trim() === ''){ //.trim() elimina los espacios vacios

            /* .parentElement te permite ir hacia el padre del elemento
            .nextElementSibling, te permite brincar al siguiente hermano del mismo tipo 

            Ejemplo: e.target.parentElement.nextElementSibling
            con estos parametros puedes recorrer tu html

                     
            */
            mostrarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);
        } else{
            console.log('Sí hay algo');
        }


    }


    function mostrarAlerta(mensaje, referencia){

        //Comprueba si ya existe una alerta

        const alerta = referencia.querySelector('.bg-red-600');


        if(alerta){
            alerta.remove();
        }

        //Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');


        //Inyectar el error en el formulario
        referencia.appendChild(error);

    }


})