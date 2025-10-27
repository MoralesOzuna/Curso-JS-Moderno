const paises = [];

function nuevoPais(pais, callback){
    paises.push(pais); //3. Se agrega alemania agregado en el paso 2
    console.log(`Agregado: ${pais}`);  
    callback();


}


function mostrarPaises(){
    console.log(paises);
}


//Se le llamada Call Back Hell por su sintaxis poco clara y que se va haciendo más confunsa conforme agregamos nuevos elementos
function iniciarCallBackHell(){
    setTimeout(()=>{
        nuevoPais('Alemania', mostrarPaises); //2. Nuevo Pais agrega a alemania y usar la funcion mostrar paises

        setTimeout(() =>{
            nuevoPais('Francia', mostrarPaises);
            setTimeout(() =>{
                nuevoPais('Inglaterra', mostrarPaises);
            }, 3000)
        }, 3000)
    }, 3000)
}


iniciarCallBackHell(); // 1. Llamamos a Call Back Hell