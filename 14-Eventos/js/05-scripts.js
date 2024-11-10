
//Detectar scrolll
window.addEventListener('scroll', () =>{

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();/* Nos indica las cordenadas de un elemento en relacion a la cercania del scroll*/


    console.log(ubicacion);


    if(ubicacion.top < 10){
        console.log('El elemento ya esta ´más visible');
    }else{
    console.log('[Aún no, da más scroll')
    }
})