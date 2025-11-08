//Api que nos permite saber cuando alguien esta viendo o no nuestra pagina


document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === 'visible'){
        console.log('Ejecutar la funcion para reproducir el video...')
    } else{
        console.log('Pausar el video');
    }
})