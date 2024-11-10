const nav = document.querySelector('.navegacion');


//registrar un evento

nav.addEventListener('click', () =>{
    console.log('Clik en nav');
});


nav.addEventListener('mouseenter', () =>{
    console.log('Este evento sucede cuando te colocas sobre la navegacion con el mouse');
    nav.style.backgroundColor = 'white'
    
});


nav.addEventListener('mouseout', () =>{
    console.log('Este evento sucede cuando sales en el espacio de la navegacion con el mouse');
    nav.style.backgroundColor = 'transparent'
});


nav.addEventListener('mousedown', () =>{
    console.log('sucede cuando dejas presionado el click');
    nav.style.backgroundColor = 'transparent'
});


nav.addEventListener('mouseup', () =>{
    console.log('sucede cuando dejas presionado el click y lo sueltas');
    nav.style.backgroundColor = 'transparent'
});



nav.addEventListener('dblclick', () =>{
    console.log('sucede cuando das doble click');
    nav.style.backgroundColor = 'transparent'
});