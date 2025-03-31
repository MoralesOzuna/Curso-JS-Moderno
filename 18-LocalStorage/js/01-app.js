/* Guardar datos en el localStorage */


/* Local storage solo guarda strings */
localStorage.setItem('nombre', 'Juan');

sessionStorage.setItem('Nombre', 'Eduardo');


const producto = {
    nombre: "Monitor de 24 pulgadas 2",
    precio: 300
}

const productoString = JSON.stringify(producto); //Convertimos el objeto en string
localStorage.setItem('producto2', productoString); //Guardamos el objeto convertido en string en el localStorage


const meses2 = ['Marzo', 'Abril', 'Mayo'];
const mesesString = JSON.stringify(meses2);
localStorage.setItem('Meses2', mesesString)