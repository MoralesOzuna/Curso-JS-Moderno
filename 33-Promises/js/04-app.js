const paises = [];


//Creamos el promise
const nuevoPais = pais => new Promise(resolve =>{
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`)
    }, 3000);
})

//Utilizamos el promise
nuevoPais('Alemania')
    .then(resultado =>{ //resultado representa el "resolve"
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia'); //Mandamos a llamar el promise con francia
    })
    .then( resultado =>{
        console.log(resultado); //Se agrego francia
        console.log(paises);
        return nuevoPais('Inglaterra');
    })
    .then(resultado =>{
        console.log(resultado);
        console.log(paises);
    })
