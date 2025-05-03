function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('juan', 500);


function formatearCliente(cliente){
    const {nombre, saldo } = cliente;
    return `El cliente ${nombre} tiene un saldo de: ${saldo}`;
}

function formatearEmpresa(cliente){
    const {nombre, saldo, categoria} = cliente;
    return `El cliente ${nombre} tiene un saldo de: ${saldo} y pertenece a la categoria ${categoria}`;
}


console.log(formatearCliente(juan));


// Creamos una nueva function de empresa (muy similar a cliente pero con algunas diferencias)


function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'cursos en Linea'); 

console.log(formatearEmpresa(CCJ)) 

//Prototypes nos ayudara a tener un codigo mas eficiente cuando se trabaja con objetos y clases