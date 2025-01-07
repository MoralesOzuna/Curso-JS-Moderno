document.addEventListener('DOMContentLoaded', () =>{

    const email = {
        email: '',
        asunto: '',
        mensaje: '', 
    }
    //Seleccionamos los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCc = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type = "submit"]');
    const btnReset = document.querySelector('#formulario button[type = "reset"]');
    const spinner = document.querySelector('#spinner')

    //Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputCc.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    formulario.addEventListener('submit', enviarEmail);



    btnReset.addEventListener('click', function(e){
        e.preventDefault(); //Prevenimos el comportamiento por default, en el caso del elemento reset, no resetea el formulario;
        resetFormulario();
    });

    function enviarEmail(e){
        e.preventDefault();

        console.log('enviando...');

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');


        setTimeout(() =>{
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            resetFormulario();

            //Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');

            alertaExito.textContent = 'Mensaje enviando correctamente';
            formulario.appendChild(alertaExito);

            setTimeout(() =>{
                alertaExito.remove();
            }, 3000)

    
        }, 3000);

    }


    function validar(e){
        if(e.target.value.trim() === '' && e.target.id !== 'cc'){ //.trim elimina los espacios en blanco
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement); /* Obtenemos el id y el div padre donde se posicionara la alerta */
            email[e.target.name] = '';
            comprobarEmail();
            return; //Detiene la ejecucion del codigo, si no se coloca algo en el input, manda la alerta hasta que se coloque algo  
            
        }

        //Comprobamos si entraste al input 'cc'
        if(e.target.id === 'cc'){
            //Validamos si el input tiene contenido
            if(e.target.value.trim() !== ''){

                //Si en dado caso hay algo, validamos si el formato del email es valido
                if(!validarEmail(e.target.value)){
                    //Si no lo es mostramos una alerta de que no es valido


                     /* .parentElement te permite ir hacia el padre del elemento
                        .nextElementSibling, te permite brincar al siguiente hermano del mismo tipo 
                     
                     */

                    mostrarAlerta('El Email no es valido', e.target.parentElement );
                    comprobarEmail();
                    delete email[e.target.name]; //Eliminamos la propiedad email.cc si es que existe
                    return;
                }
            } else{

                //Si el input no tiene contenido, borramos el campo email.cc
                delete email[e.target.name];
                //Limpiamos la alerta
                limpiarAlerta(e.target.parentElement);
                return;
            
            }
        }        

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            email[e.target.name] = ''
            comprobarEmail();
            mostrarAlerta('El email no es valido', e.target.parentElement);
            return
        }
        //si pasamos la validacion se ejecuta esto
        limpiarAlerta(e.target.parentElement);

        //asignar los valores

    
        email[e.target.name] = e.target.value.trim().toLowerCase(); /*  email[e.target.name] es uina notacion de corchetes, es mas flexible que utilizar objet.property 
                                                                        Se usa cuando el nombre de la propiedad se conoce solo en tiempo de ejecución (como en el ejemplo)*/

        //Comprobar el objeto de email
        comprobarEmail();

       
    
     
    }


    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);
      
        //Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //Inyectar el error como hijo del input
        referencia.appendChild(error);
    }


    function limpiarAlerta(referencia){
         //Comprueba si ya existe una alerta
         const alerta = referencia.querySelector('.bg-red-600');
        
         if(alerta){
             alerta.remove();
         }
 
    }


    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ //Expresion regular busca un patron en este caso en un email

        const resultado = regex.test(email);

        return resultado;


    }

    function comprobarEmail(){
        //verificamos si de todos los campos al menos uno esta vacio
        if(Object.values(email).includes('') ){ //object.values te muestra los valores del objeto. Con .include verificamos si al menos uno de los elementos (email, asunto, mensaje) devolveindo true si al menos uno de los valores esta vacio
            btnSubmit.classList.add('opacity-50'); //eliminamos la clase opacity
            btnSubmit.disabled = true;
            console.log(email);
            return
        }
        btnSubmit.classList.remove('opacity-50'); //eliminamos la clase opacity
        btnSubmit.disabled = false;
        
    }


    function resetFormulario(){
            //reiniciar formulario
            email.email = '';
            email.asunto ='';
            email.mensaje = '';
            email.cc = '';
    
            comprobarEmail();
    
            formulario.reset();
    }


  


});

