//Ejemplo de undefined
let numero;
console.log(numero); //undefined ya que no tiene valor
console.log(typeof numero);


//Ejemplo de null

let numero2 = null;
console.log(numero2);
console.log(typeof numero2); //Devuelve un object por reglas impuestas de EcmaScript


console.log(numero == numero2); //Nos devuelve true, aunque no son iguales a final de cuenta
console.log(numero === numero2); //Comparador estricto, compara cada aspecto de los datos, por ello devuelve false


