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


    cliente = {...cliente, mesa, hora} //Se usa el spread operator() ...cliente para copiar el objeto completo y no perder el array pedido que no se esta modificando   

    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();


    //MOstrar las secciones
    mostrarSecciones();

    //obtener platillos de la API de JSON-server
    obtenerPlatillos();


}


function mostrarSecciones(){
    //Mostramos las secciones de platillos y resumen del pedido
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatillos(){
    const url = 'http://localhost:3000/platillos';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarPlatillos(resultado)) //el resultado de respuesta.json se pasa ala funcion mostrar platillos
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

    //Revisar que la cantidad sea mayor a 0
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
    resumen.classList.add('col-md-6', 'card', 'py-2', 'px-3', 'shadow');


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

        const precioValor = document.createElement('SPAN');
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

    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
   
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);


    //Mostrar formulario de propinas
    formularioPropinas();
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


    if(cliente.pedido.length){
        // Mostrar el resumen
        actualizarResumen();
    } else{
        mensajePedidoVacio();
    }

    //El producto se eliminó por lo tanto regresamos la cantidad a 0 en su input
    const productoEliminado = `#producto-${id}`
    const inputEliminado = document.querySelector(productoEliminado);
    inputEliminado.value = 0;
    console.log(productoEliminado)
}


function mensajePedidoVacio(){
    const contenido = document.querySelector('#resumen .contenido');
    const texto = document.createElement('P');
    texto.classList.add('text-center');
    texto.textContent = 'Añade los elementos del pedido';

    contenido.appendChild(texto);
}


function formularioPropinas(){
    const contenido = document.querySelector('#resumen .contenido');

    const formulario = document.createElement('DIV');
    formulario.classList.add('col-md-6', 'formulario');

    const divFormulario = document.createElement('DIV');
    divFormulario.classList.add( 'card', 'py-2', 'px-3', 'shadow');


    const heading = document.createElement('H3');
    heading.classList.add('my-4', 'text-center');
    heading.textContent = 'Propina';

    // Radio Button 10%
    const radio10 = document.createElement('INPUT');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = '10';
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('LABEL');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('DIV');
    radio10Div.classList.add('form-check');

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);


    //Radio Button 25%
    const radio25 = document.createElement('INPUT');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = '25';
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('LABEL');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label');

    const radio25Div = document.createElement('DIV');
    radio25Div.classList.add('form-check');

    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);


    //Radio Button 25%
    const radio50 = document.createElement('INPUT');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value = '50';
    radio50.classList.add('form-check-input');
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement('LABEL');
    radio50Label.textContent = '50%';
    radio50Label.classList.add('form-check-label');

    const radio50Div = document.createElement('DIV');
    radio50Div.classList.add('form-check');

    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);




    //Agregar al Div principal
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio25Div);
    divFormulario.appendChild(radio50Div);


    //Agregar al formulario
    formulario.appendChild(divFormulario);
    

    contenido.appendChild(formulario);

}

function calcularPropina(){
    const {pedido} = cliente;


    let subtotal = 0;

    //Calcular el subtotal a pagar
    pedido.forEach(articulo =>{
        subtotal += articulo.cantidad * articulo.precio;
    });


    //Seleccionar el radioButton con la propina del cliente
    const propinaSeleccionada = document.querySelector('[name = "propina"]:checked').value;


    // alcular la propina   
    const propina = ((subtotal * parseInt(propinaSeleccionada)) / 100);

    //Calcular el total a pagar
    const total = subtotal + propina;
    console.log(total)

    mostrarTotalHTML(subtotal, total, propina);
}


function mostrarTotalHTML(subtotal, total, propina){

    const divTotales = document.createElement('DIV');
    divTotales.classList.add('total-pagar', 'my-5');

    //Subtotal
    const subtotalParrafo = document.createElement('p');
    subtotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    subtotalParrafo.textContent = 'Subtotal Consumo: '

    const subtotalSpan = document.createElement('SPAN');
    subtotalSpan.classList.add('fw-normal');
    subtotalSpan.textContent = `$${subtotal}`;

    subtotalParrafo.appendChild(subtotalSpan);
    divTotales.appendChild(subtotalParrafo);

    //Eliminar el ultimo resultado

    const totalpagarDiv = document.querySelector('.total-pagar');
    if(totalpagarDiv){
        totalpagarDiv.remove();
    }


     //Propina
    const propinaParrafo = document.createElement('p');
    propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    propinaParrafo.textContent = 'Propina: '

    const propinaSpan = document.createElement('SPAN');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;

    propinaParrafo.appendChild(propinaSpan);
    divTotales.appendChild(propinaParrafo);




    //Propina
    const totalParrafo = document.createElement('p');
    totalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    totalParrafo.textContent = 'Total: '

    const totalSpan = document.createElement('SPAN');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$${total}`;

    totalParrafo.appendChild(totalSpan);
    divTotales.appendChild(totalParrafo);

    const formulario = document.querySelector('.formulario > div');
    formulario.appendChild(divTotales);

}