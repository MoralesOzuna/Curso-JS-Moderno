//Se ejecuta despues de descargar el contenido HTML O DOM 
document.addEventListener('DOMContentLoaded', function() {


    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    //Seleccionar los elementos de la interaz
    const inputEmail = document.querySelector('#email');
    const inputCc = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"');
    const btnReset = document.querySelector('#formulario button[type="reset"');
    const spinner = document.querySelector('#spinner');

    //Asignar eventos
    inputCc.addEventListener('blur', validar);
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e){
        e.preventDefault(); //Previene el comportamiento por default que es resetear los datos


        //Reiniciamos el objeto
        resetFormulario();
    });

    function enviarEmail(e){

        e.preventDefault(); //Previene el comportamiento por default que es enviar los datos
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            
            //Reiniciar el codigo

            resetFormulario();

            //Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild(alertaExito);


            setTimeout(() => {
                alertaExito.remove();
            }, 3000);

           
        }, 3000);

        

    }
    
    
    function validar(e){
        if(e.target.value.trim() === '' && e.target.id !== 'cc'){ //.trim() elimina los espacios vacios

            /* .parentElement te permite ir hacia el padre del elemento
            .nextElementSibling, te permite brincar al siguiente hermano del mismo tipo 

            Ejemplo: e.target.parentElement.nextElementSibling
            con estos parametros puedes recorrer tu html
            */
            mostrarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = ''; //Reiniciamos datos del objeto
            console.log(email);
            comprobarEmail(); //desabhilitamos el boton
            
            return; //Si se activa el if, el return corta la ejecucion del codigo
        } 

        if(e.target.id === 'cc' && e.target.value.trim() !== '' && !validarEmail(e.target.value)){
            mostrarAlerta('El Email adicional no es valido', e.target.parentElement);
            email[e.target.name] = ''
            console.log('Correo no valido');
            console.log(email);
            comprobarEmail();
            return;

            /* cc = '' 
            pero existe*/
        }
        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El Email no es valido', e.target.parentElement);
            email[e.target.name] = ''; //Reiniciamos datos del objeto
            console.log(email);
            comprobarEmail();
            return;
        }
        limpiarAlerta(e.target.parentElement);
        
        //Asignamos valores al objeto
        //email[email, asunto, mensaje] = el valor escrito en email, asunto, mensaje, sin espacios y en minusculas
        //email[email, asunto, mensaje] nos va permitiendo acceder a las propiedades en el objeto de forma dinamica


        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        if(e.target.id === 'cc' && e.target.value.trim() === ''){
            delete email.cc;
            console.log('borrando...');
        }

        //Comprobar el objeto de email 
        comprobarEmail();

    }


    function mostrarAlerta(mensaje, referencia){

       limpiarAlerta(referencia);
        
        //Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');


        //Inyectar el error en el formulario
        referencia.appendChild(error);

    }


    function limpiarAlerta(referencia){
        //Comprueba si ya existe una alerta

        /* Si coloco document.querySelector, se limpian todas las alertas en el documento
        utilizando la referencia buscamos desde un punto especifico */
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }


    function validarEmail(email){

        //Expresion regular
        //Es una serie de valores que conforman un patron
        const regex  =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;

    }


    function comprobarEmail(){
        //Esto retorna un arreglo
        //console.log(Object.values(email)); Retorna los valores Object.keys(objeto) retorna las llaves
        //includes busca un string vacio
        //includes es una propiedad de los arrays
       
        if(Object.values(email).includes('') ){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        }


        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;


    }

    function resetFormulario(){
          //Reiniciamos el objeto
          email.email = '';
          email.asunto = '';
          email.mensaje = '';


          formulario.reset();
          
          const errores = document.querySelectorAll('.bg-red-600');

          errores.forEach( error => {
            error.remove();
          })

    }


})