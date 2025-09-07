const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];

const ordenes = new Set([123, 231, 131, 102]);

const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', 'Desarrollador web');


//Default esto te entrega un resultado de acuerdo al tipo de elemento que se itera
for(let ciudad of ciudades){
    console.log(ciudad)
}
for(let orden of ordenes){
    console.log(orden)
}
for(let dato of datos){
    console.log(dato)
}


//Keys Iterator
for(let key of ciudades.keys()){
    /* console.log(key) */
}
for(let key of ordenes.keys()){
    /* console.log(key) */
}
for(let key of datos.keys()){
    /* console.log(key) */
}


//Values Iterator entrega solo el valor
for (let value of ciudades.values()){
    /* console.log(value); */
}
for (let value of ordenes.values()){
    /* console.log(value); */
}
for (let value of datos.values()){
    /* console.log(value); */
}


//Entries iterator entrega llave y valor. Si no existe una llave crea en automatica una
for(let entry of ciudades.entries()){
    /* console.log(entry) */
};


for(let entry of ordenes.entries()){
  /*   console.log(entry); */
};

for(let entry of datos.entries()){
   /*  console.log(entry); */
};
