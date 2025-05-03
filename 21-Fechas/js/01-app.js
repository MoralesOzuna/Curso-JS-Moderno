const diaHoy = new Date(); //Asigna la fecha del dia de hoy, esto es un objeto


//Devuelve la fecha en otro formato
/* 
const diaHoy = new Date().toLocaleString(); 
                new Date().toLocaleTimeString();
                new Date().toLocaleDateString();

*/ 



const diaHoy2 = new Date('1-5-2000'); //Asigna una fecha en especifico
const diaHoy3 = new Date('May 5 2000'); //Asigna una fecha en especifico

let valor;
valor = diaHoy

//Metodos de los objetos de fecha

valor = diaHoy.getFullYear(); //Retorna el año actual
valor = diaHoy.getMonth(); // Retorna el entero del mes, tomando en cuenta que Enero = 0
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.setFullYear(2020); //Con set asignamos un valor
valor = diaHoy.getFullYear(); 
console.log(valor);
