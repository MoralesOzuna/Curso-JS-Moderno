const producto = {
    nombre: "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
    informacion : {
        medida: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}



//Destructuring de objetos anidados

const {nombre, informacion /* accedemos a fabricacion, ya que en el siguiente texto es exclusivo para acceder a fabricacion*/,  informacion: {fabricacion, fabricacion: {pais}}} = producto; //De informacion entramos a fabricacion

console.log(nombre);
console.log(informacion);
console.log(fabricacion);