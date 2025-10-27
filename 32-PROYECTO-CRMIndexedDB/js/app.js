/* indexedDB.open → abre o crea la base de datos.

onupgradeneeded → define el esquema inicial (objectStore e índices).

onsuccess → conexión lista, guardas la referencia (DB = request.result).

onerror → captura fallos al abrir/usar la DB.

transaction → permiso temporal para leer/escribir en un objectStore.

objectStore → como una “tabla” donde están los datos.

add → inserta nuevo registro (falla si la clave ya existe).

put → inserta o actualiza registro (upsert).

get → busca un registro por clave primaria.

delete → borra un registro por clave.

openCursor → recorre registro por registro.

createIndex → crea índice para búsquedas rápidas en un campo.

count → devuelve cuántos registros hay. */



//IIFE es para que las variables se queden de forma local

(function(){
    let DB;
    const listadoClientes = document.querySelector("#listado-clientes");
    document.addEventListener('DOMContentLoaded', () =>{
        crearDB();

        //Si exise la base de datos 

        if(window.indexedDB.open('crm', 1)){
            obtenerClientes();
        }

        listadoClientes.addEventListener('click', eliminarRegistro)
    });

    function eliminarRegistro(e){


        if(e.target.classList.contains('eliminar')){
            const idEliminar = Number(e.target.dataset.cliente);
            const confirmar = confirm('¿Deseas eliminar este cliente?');
            

            if(confirmar){
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');

                objectStore.delete(idEliminar);

                transaction.oncomplete = function(){
                    console.log('Eliminando....');

                    e.target.parentElement.parentElement.remove();
                }

                transaction.onerror = function(){
                    console.log('Hubo un eror');
                }
            }
            

            
        }
    }

    //Crea la base de datos de IndexDB

    function crearDB(){
        const crearDB = window.indexedDB.open('crm', 1);

        crearDB.onerror = function(){
            console.log('Hubo un error');
        };

        crearDB.onsuccess = function(){
            DB = crearDB.result;
        };

        crearDB.onupgradeneeded = function(e){
            const db = e.target.result;
            const objectStore = db.createObjectStore('crm', {keyPath: 'id', autoIncrement: true });

            objectStore.createIndex('nombre', 'nombre', {unique: false});
            objectStore.createIndex('email', 'email', {unique: true});
            objectStore.createIndex('telefono', 'telefono', {unique: false});
            objectStore.createIndex('empresa', 'empresa', {unique: false});
            objectStore.createIndex('id', 'id', {unique: true});


            console.log('DB Lista y Creada');
        }
    }


    function obtenerClientes(){
        // Abre (o crea si no existe) la base de datos "crm" en versión 1
        const abrirConexion = window.indexedDB.open('crm', 1);
        
          // Si ocurre un error al abrir la DB
        abrirConexion.onerror = function(){
            console.log('hubo un error')
        }

        // Si la conexión es exitosa
        abrirConexion.onsuccess = function(){

            // Guardamos la referencia de la base abierta en DB
            DB = abrirConexion.result;
            
            // Creamos una transacción de solo lectura sobre el store "crm"


            const objectStore = DB.transaction('crm').objectStore('crm');

            // Abrimos un cursor para recorrer todos los registros del store
            objectStore.openCursor().onsuccess = function(e){

                
                const cursor = e.target.result;

                // Si el cursor existe, aún hay registros
                if(cursor){
                     // cursor.value es el objeto almacenado en IndexedDB
                    const {nombre, empresa, email, telefono, id} = cursor.value;

          
                    listadoClientes.innerHTML += 
                    ` <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${telefono}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${empresa}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id} "  class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                            </td>
                        </tr>
                    `; //Este codigo  <a href="editar-cliente.html?id=${id} es para pasar parametros a la url. Se llama QueryString


                    // cursor.continue() avanza al siguiente registro
                    cursor.continue();
                } else{
                    console.log('No hay más registros')
                }
            }     
        }
    }


})();