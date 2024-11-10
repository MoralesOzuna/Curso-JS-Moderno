console.log(1)


document.addEventListener('DOMContentLoaded', () =>{ //Este evento se ejecuta una vez que es descargado el contenido de html
    console.log(2); //Aunque es el 2do codigo, aparece en 3ro, ya que espera a que el documento este listo
})

console.log(3);