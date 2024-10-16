//Añadiendo una funcion a un objeto
//Metodos de propiedad
const reproductor = {
    reproducir : id => console.log(`Reproduciendo cancion con el id ${id}...`),
    pausar: () => console.log('Pausando...'),
    borrar: id =>console.log(`Borrando cancion ${id}`),
    crearPlaylist: nombre =>console.log(`Creando la playlist ${nombre}`),
    reproducirPlaylist : nombre =>console.log(`Reproduciendo la playlist ${nombre}`)  
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

reproductor.borrar = function(id){
    console.log(`Borrando cancion ${id}`)
}

reproductor.borrar(30);
reproductor.crearPlaylist('Rock');
reproductor.reproducirPlaylist('Viva el Rock');