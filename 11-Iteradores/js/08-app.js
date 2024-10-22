const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}


for (let propiedad in automovil){ //for of itera sobre arreglo for in itera sobre objetos
    console.log(propiedad); //Retorna modelo, year, motor
    console.log(`${automovil[propiedad]}`) //Retorna Camaro, 1969, 6.0
}


for (let [llave, valor] of Object.entries(automovil)){
    console.log(valor); //retorna valores
    console.log(llave); //retorna objetos
}