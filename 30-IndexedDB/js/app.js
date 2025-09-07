let DB;

document.addEventListener('DOMContentLoaded', () =>{
    crmDB();

    setTimeout(() => {
        crearCliente(); 
    }, 5000)
   
  
})

function crmDB(){
    //Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1); //crm es el nombre de la base datos, 1 se refiere a la version


    //si hay un error
    crmDB.onerror = function(){
        console.log('Hubo un error al crear la database');
    }

    //si se creo bien
    crmDB.onsuccess = function(){
        console.log('Base de datos creada');

        DB = crmDB.result;
    }

    //Configuración de la base de datos 
    //Lo creado en esta funcion solo se aplica una vez
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result; //Brinda informacion de la base de datos creada

        //esto es un objeto de configuracion
        const objectStore = db.createObjectStore('crm',{ //crm es el nombre de la base de datos
            
            keyPath: 'crm',
            autoIncrement: true
        });

        //Definir las columnas
        //keypath es el nombre por el cual te refieres a una columna
        objectStore.createIndex('nombre', 'nombre', {unique: false})
        objectStore.createIndex('email', 'email', {unique: true})
        objectStore.createIndex('telefono', 'telefono', {unique: false})


        console.log('Columna creada')


    }
}

function crearCliente(){
    //Transacciones son todas las acciones que se pueden realizar con la base de datos
    let transaction = DB.transaction(['crm'], 'readwrite'); //crm es el nombre de la base de datos y readwrite es el nombre de la funcionalidad , existe tambien por ejemplo 'readonly'


    transaction.oncomplete = function(){
        console.log('Transacción completada');
    }

    transaction.oneerror = function(){
        console.log('Hubo un error en la transacción');
    }

    const objectStore = transaction.objectStore('crm');
    const nuevoCliente = {
        telefono: 66490294792,
        nombre: 'Juan',
        email: 'correo@corre.com'
    }

    const peticion = objectStore.add(nuevoCliente); //agregamos objeto

    console.log(peticion);
}