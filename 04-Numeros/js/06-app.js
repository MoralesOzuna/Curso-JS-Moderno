const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;

//Convertimos de string a numero entero
console.log(Number.parseInt(numero1));


//Convierte de string a decimal 
console.log(Number.parseFloat(numero2));

//Devuelve NaN ya que no es posible hacer esa conversion
console.log(Number.parseFloat(numero3));


//Revisar si un numero es entero o no
console.log(Number.isInteger(numero4)); //retoma entero
