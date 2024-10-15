const nombre = 'Hola'
const precio = 20;


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`); //this se refiere a los valores dentro del objeto
    }
}
producto.mostrarInfo();

