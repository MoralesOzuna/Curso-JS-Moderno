//Codigo de APPIs Nativas
const notificarBtn = document.querySelector('#notificar');
notificarBtn.addEventListener('click', () =>{
    Notification //Esta es la API de notificaciones
        .requestPermission()
        .then(resultado =>{
            console.log(`'El resultado es: ${resultado}` )
        })
})


const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', ()=>{
    if(verNotificacion.premission === 'granted');
        const notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/ccj.png',
            body: 'Codigo con Juan, aprende con proyectos reales'
        });

        notificacion.onclick = function(){
            window.open('http://127.0.0.1:5500/34-APIs-JS/index.html')
        }
});