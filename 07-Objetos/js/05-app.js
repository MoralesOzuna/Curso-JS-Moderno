//Objetos anidados

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

console.log(producto);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);

//Accediento hasta pais

console.log(producto.informacion.fabricacion.pais);