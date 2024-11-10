const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', validarFormulario)

 
function validarFormulario(e){
    e.preventDefault(); //Impide hacer la accion por default, como tratar de enviar el formulario a este caso

    console.log('Buscando...');
    console.log(e.target.action)

}


/* 
formulario.addEventListener('submit', (e) =>{
    e.preventDefault(); //Impide hacer la accion por default, como tratar de enviar el formulario a este caso

    console.log('Buscando...')

    console.log(e.target.action);
});
}
*/