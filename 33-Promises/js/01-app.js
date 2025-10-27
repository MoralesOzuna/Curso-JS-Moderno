const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

function mostrarPaises(){
    setTimeout(()=>{
        paises.forEach(pais =>{
            console.log(pais);
        })
    }, 1000)
}


mostrarPaises();