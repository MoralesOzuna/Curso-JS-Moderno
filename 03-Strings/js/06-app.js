const producto = "Monitor 20 pulgadas";


//.repeat te va a premitir repetir una cadena de texto...

const texto = " en Promocion".repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!!`);


//Split, dividir un string


const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" ")); /* Divide el string por cada palabra */


const hobbies = "Leer, caminar, escuchar musica, escribir, aprender a programar";
console.log(hobbies.split(","));

const tweet = "Aprendiendo Javascript #JSModernoConJuan";
console.log(tweet.split('#'))