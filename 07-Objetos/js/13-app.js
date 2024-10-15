const producto = {
    nombre: "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}


console.log(Object.keys( producto )); //Nos retorna arreglo con los keys de los objetos (nombre, precio, disponible)

console.log(Object.values(producto)) //Retorna valores ("Monitor 20 pulgadas", 300, true)'

console.log(Object.entries(producto)); //Retorna ambos valores en pares