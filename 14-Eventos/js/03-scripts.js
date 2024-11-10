const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) =>{
    if(e.target.value === ''){
        console.log('Fallo la validacion')
    }
    //console.log(e.target.value); //e nos presenta infromacion del evento. 
                                    //e.target.value nos permite acceder al contenido que se escribe en el input
                                    //Funciona para validar en un formulario, ya que obtienes como resultado lo que ingresas en el input
});


/*  keydown Se activa cuando oprimes una tecla
    keyup se activa cuando oprimes una tecla y la sueltas
    blur funciona cuando te colocas sobre un input y te sales, funciona bien con validacion
    copy: funciona cuando copias
    paste: funciona cuando pegas
    cut funciona cuando cortas texto
    input funciona cuando realizas cualquier accion sobre el elemetnto 

*/