function iniciarApp(){

    const selectCategorias = document.querySelector('#categorias');
    const resultado = document.querySelector('#resultado');
   

    if(selectCategorias){
        selectCategorias.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }
    const favoritosDiv = document.querySelector('.favoritos');
    if(favoritosDiv){
        obtenerFavoritos();
    }

    
    const modal = new bootstrap.Modal('#modal', {}) //Instancia de modal


    

    function obtenerCategorias(){
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(respuesta => respuesta.json()) //configuramos una respuesta de tipo json
            .then(resultado => mostrarCategorias(resultado.categories)) //obtenemos los resultados de la respuesta.json();
    }

    function mostrarCategorias(categorias = []){
        categorias.forEach(categoria =>{
            const {strCategory} = categoria;
            const option = document.createElement('OPTION');
            option.value = strCategory;
            option.textContent = strCategory;
            selectCategorias.appendChild(option);
        })
    }

    function seleccionarCategoria(e){
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
        
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado =>mostrarRecetas(resultado.meals));
    }

    function mostrarRecetas(recetas = []){
       

        //Eliminar resultados anteriores
        limpiarHTML(resultado);

        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados': 'No Hay resultados';
        resultado.appendChild(heading);

         //Iterar en los resultados
        recetas.forEach(receta =>{
            const {idMeal, strMeal, strMealThumb} =receta;

            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4');
            
            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.src =strMealThumb ?? receta.img; //Lo obtenemos de la API o del LocalStorage si no existe
            recetaImagen.alt = `Imagen de la receta ${strMeal ?? receta.titulo}`; 

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');


            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal ?? receta.titulo;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver Receta';

            //Asigna al botón el atributo data-bs-target para indicar qué modal (id="modal") debe abrir con Bootstrap
            /* recetaButton.dataset.bsTarget = '#modal' */

            // Indica a Bootstrap que este botón activará la apertura de un modal
            /* recetaButton.dataset.bsToggle = 'modal' */

            recetaButton.onclick = function(){
                
                seleccionarReceta(idMeal ?? receta.id);
            }

            //inyectar en el codigo HTML;

            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen)
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);
        })
    }

    function seleccionarReceta(id){
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        
        fetch(url)
            .then(response => response.json())
            .then(resultado => mostrarRecetaModal(resultado.meals[0]));
    }

    function mostrarRecetaModal(receta){


        const {idMeal, strInstructions, strMeal, strMealThumb} = receta;
        
        //Anadir contenido al modal
        const modalTilte = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTilte.textContent = strMeal;
        modalBody.innerHTML = `
            <img class="img-fluid" src = "${strMealThumb}" alt="receta ${strMeal}" />
            <h3 class = "my-3"> Instrucciones </h3>
            <p>${strInstructions} </p>
            <h3 class = 'my-3'>Ingredientes y Cantidades </h3>
        
        `;

        //Mostrar Cantidades e ingredientes
        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');
        for(let i = 1; i<=20; i++){

            if(receta[`strIngredient${i}`]){ //Vas enumerando los ingredientes por ingredient1 ingredient2 tal y como aparece en la API. Al mismo tiempo al encontrarse con un ingredient[x] que esta vacio, el if lo toma como falso y hasta ahi se ejecuta el codigo.

                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta [`strMeasure${i}`];


                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;
                listGroup.appendChild(ingredienteLi);
            }
        }

        modalBody.appendChild(listGroup);


        const modalFooter = document.querySelector('.modal-footer');


        limpiarHTML(modalFooter);

        //Botones de cerrar y favorito
        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal)? 'Eliminar Favorito' : 'Guardar Favorito'


        //LocalStorage
        btnFavorito.onclick = function(){
            if(existeStorage(idMeal)){
                eliminarFavorito(idMeal); 
                btnFavorito.textContent = 'Guardar Favorito';
                mostrarToast('Eliminado Correctamente');
                return //Si existe termina ejecucion
      
            }

            //si no existe se crea clase
            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb
            });
            btnFavorito.textContent = 'Eliminar Favorito';
            mostrarToast('Agreado Correctamente');
        }

        const btnCerrarModal = document.createElement('BUTTON');
        btnCerrarModal.classList.add('btn', 'btn-secondary', 'col');
        btnCerrarModal.textContent = 'Cerrar';
        btnCerrarModal.onclick = function(){
            modal.hide();
        }


        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrarModal);



        //Muestra el modal
        modal.show();
       

    }

    function agregarFavorito(receta){
        //JSON.parse convierte el string en un array
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []; //?? se llama nullish coalescing, si lo que esta antes del ?? es decir favoritos en este caso, es null o undefined, devuelve lo que esta despues, es decir un arreglo vacio
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta])); //JSON.stringify convierte el contenido de tipo array a string, ya que es la unica manera de guardar datos en local storage
    }


    function eliminarFavorito(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];  
        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id);    
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }


    function existeStorage(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some(favorito => favorito.id === id); //Devuelve true
    }

    function mostrarToast(mensaje){
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        toastBody.textContent = mensaje;

        const toast = new bootstrap.Toast(toastDiv);


        toast.show();
    }

    function obtenerFavoritos(){
        const favoritos = JSON.parse(localStorage.getItem('favoritos'))?? [];
        console.log(favoritos.length);
        

        if(favoritos.length){
            mostrarRecetas(favoritos);
            return;
        }

        const noFavoritos = document.createElement('P');
        noFavoritos.textContent = 'No hay favoritos aún';
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
        favoritosDiv.appendChild(noFavoritos);
    }


    function limpiarHTML(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);
