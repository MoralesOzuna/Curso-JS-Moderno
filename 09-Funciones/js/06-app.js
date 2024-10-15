//Parametros por Default


function saludar(nombre, apellido = ''){ //Si no esta presente el apellido, se queda como un string vacio, pero ya no manda undefined
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Jose', 'Morales');
saludar('')
