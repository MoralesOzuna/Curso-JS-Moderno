let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}



const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);


function guardarCliente(){
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //Revisar si hay campos vacios
    const camposVacios = [mesa, hora].some(campo => campo === '');


    if(camposVacios){

        //Verificar si hay una alerta

        const existeAlerta = document.querySelector('.invalid-feedback');

        if(!existeAlerta){
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(()=>{
                alerta.remove();
            }, 3000)
        }
    }
    /* Object property ShortHand, es como escribir lo siguinete
     cliente = {
        mesa: mesa,
        hora: hora
    }; */


    cliente = {...cliente, mesa, hora} //Se usa el spread operator() ...cliente para copiar el objeto completo y no perder pedido    

    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();


    //MOstrar las secciones
    mostrarSecciones();

    //obtener platillos de la API de JSON-server
    obtenerPlatillos();


}


function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatillos(){
    const url = 'http://localhost:3000/platillos';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarPlatillos(resultado))
        .catch(error => console.log(error)) //por si falla se activa .catch
}

function mostrarPlatillos(platillos){
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach(platillo => {
        const row = document.createElement('DIV');
        row.classList.add('row', 'py-3', 'border-top');

        const nombre = document.createElement('DIV');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;

        const precio = document.createElement('DIV');
        precio.classList.add('col-md-3', 'fw-bold');
        precio.textContent = `$${platillo.precio}`;


        const categoria = document.createElement('DIV');
        categoria.classList.add('col-md-3');
        categoria.textContent = categorias[platillo.categoria]; //objeto[propiedad] es lo mismo que decir objeto.llave pero más dinamico.

        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${platillo.id}`;
        inputCantidad.classList.add('form-control');


        //Funcion que detecta la cantidad y el platillo que se esta agregando

        /* agregarPlatillo(platillo.id) esto no puede hacerse porque ativa la  funcion agregar platillo */
        inputCantidad.onchange = function(){ //onchange es un addevenetListener para elementos al vuelo;
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({...platillo, cantidad}) //Pasamos el objeto platillo y la cantidad
        }; 

        const agregar = document.createElement('DIV');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);


        


        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);

        contenido.appendChild(row);
    })
}

function agregarPlatillo(producto){ //producto es el ultimo platillo que agrego
    
    //Extramos la propiedad pedido actual que tenemos en cliente.
    let {pedido} = cliente;

    //Revisar que la cantidad sea mayor a 0https://chatgpt.com/c/69392ba3-4a28-8332-98d5-904dc2d9fd93
    if(producto.cantidad > 0){
        //revisar si un el elemento ya existe en el array
        if(pedido.some(articulo => articulo.id === producto.id)){
            const pedidoActualizado = pedido.map(articulo =>{  //recorremos todo el array para crear uno nuevo
                if(articulo.id === producto.id){
                    return { //un map siempre tiene que retornar lo que se modifica o hace distinto
                        //Esto es para evitar la mutación del arreglo original 
                        ...articulo, 
                        cantidad: producto.cantidad //Actualizamos cantidad recuerda que esto es en pedido actualizado
                    };
                }

                return articulo; //Se retorna lo que es igual
            });
            //Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];
        }else{
            //El articulo no existe, lo agregamos al array de pedido
             cliente.pedido = [...pedido, producto]; //Actualizamos cliente.pedido con la referencía que sacamos del mismo objeto y el nuevo producto.
        }
       
    } else{
        //Eliminar elementos cuando la cantidad es 0
        const resultado = pedido.filter(articulo => articulo.id !== producto.id);
        cliente.pedido = [...resultado]
    }

    //Limpiar el codigo HTML previo
    limpiarHtml();

    if(cliente.pedido.length){
        // Mostrar el resumen
        actualizarResumen();
    } else{
        mensajePedidoVacio();
    }

 
}


function actualizarResumen(){
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow');


    //Información de la mesa
    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    //Información de la hora
    const hora = document.createElement('P');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    //Titulo de la seccion
    const heading = document.createElement('H3');
    heading.textContent = 'Platillos Consumidos';
    heading.classList.add('my-4', 'text-center');

    //Iterar sobre el array de pedidos
    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');

    const {pedido} = cliente;
    pedido.forEach(articulo =>{
        const {nombre, cantidad, precio, id} = articulo;

        const lista = document.createElement('LI');
        lista.classList.add('list-group-item');

        const nombreEL = document.createElement('H4');
        nombreEL.classList.add('my-4');
        nombreEL.textContent = nombre;


        //Cantidad del articulo
        const cantidadEl = document.createElement('P');
        cantidadEl.classList.add('fw-bold');
        cantidadEl.textContent = 'Cantidad: ';

        const cantidadValor = document.createElement('SPAN');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;


        //Precio del articulo
        const precioEl = document.createElement('P');
        precioEl.classList.add('fw-bold');
        precioEl.textContent = 'Precio: ';

        precioValor = document.createElement('SPAN');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `$${precio}`;


        
        //Subtotal del articulo
        const SubtotalEl = document.createElement('P');
        SubtotalEl.classList.add('fw-bold');
        SubtotalEl.textContent = 'Subtotal: ';

        const subtotalValor = document.createElement('SPAN');
        subtotalValor.classList.add('fw-normal');
        subtotalValor.textContent = calcularSubtotal(precio, cantidad);

        //Boton para eliminar
        const btnEliminar = document.createElement('BUTTON');
        btnEliminar.classList.add('btn','btn-danger');
        btnEliminar.textContent = 'Eliminar del pedido';

        //Funcion para eliminar del pedido
        btnEliminar.onclick = function(){
            eliminarProducto(id)
        }


        //Agregar Valores a sus contenedores
        cantidadEl.appendChild(cantidadValor);
        precioEl.appendChild(precioValor);
        SubtotalEl.appendChild(subtotalValor)


        //AgregarElemento al Li
        lista.appendChild(nombreEL);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(SubtotalEl);
        lista.appendChild(btnEliminar);

        //Agregar lista al grupo principal
        grupo.appendChild(lista)
    })


    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(heading);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);
}

function limpiarHtml(){
    const contenido = document.querySelector('#resumen .contenido');

    while(contenido.firstChild){
        contenido.removeChild(contenido.firstChild);
    }
}


function calcularSubtotal(precio, cantidad){
    return `$ ${precio * cantidad}`
}

function eliminarProducto(id){
    const {pedido} = cliente;
    //Eliminar elementos cuando la cantidad es 0
    const resultado = pedido.filter(articulo => articulo.id !== id);
    cliente.pedido = [...resultado];


     //Limpiar el codigo HTML previo
    limpiarHtml();

      limpiarHtml();

    if(cliente.pedido.length){
        // Mostrar el resumen
        actualizarResumen();
    } else{
        mensajePedidoVacio();
    }

    //El producto se eliminó por lo tanto regresamos la cantidad a 0 en su input
    const productoEliminado = `#producto-${id}`
    console.log(productoEliminado)
}


function mensajePedidoVacio(){
    const contenido = document.querySelector('#resumen .contenido');
    const texto = document.createElement('P');
    texto.classList.add('text-center');
    texto.textContent = 'Añade los elementos del pedido';

    contenido.appendChild(texto);
}