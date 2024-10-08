const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


//Revisar si 2 numeros son iguales
//Este comparadar nos da como resultado true, aunque son numeros con diferente tipo de datos
console.log(numero1 == numero2); //false

//Comparador stricto
//Se fija en el valor y en el tipo de dato
console.log(numero1 === numero2);//true

console.log(numero1 === parseInt(numero2)); //Lo convertimos a entero, con ello el resultado es true

console.log(typeof numero1);
console.log(typeof numero2);


//Diferente

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); //false
console.log(numero1 != numero2); //true (es falso)

//Operador de diferencia estricto
console.log(numero1 !== numero2); //true (es real)

console.log(numero1 !== parseInt(numero2));