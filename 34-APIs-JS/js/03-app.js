/*Esta Api nos permite saber si tenemos conexion a internet
 Nos permite enviar una pantalla de "no tienes conexion, por ejemplo"
*/


window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);


function actualizarEstado(){
    if(navigator.onLine){
        console.log('Si estas conectado')
    } else{
        console.log('No estas conectado')
    }
}