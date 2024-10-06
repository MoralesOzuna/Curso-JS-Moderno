let resultado;

//PI
resultado = Math.PI;


//Redondear
resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado - Math.round(2.5);


//Redondear hacia arriba
resultado = Math.ceil(2.5);
resultado - Math.ceil(2.4);


//Reondear hacia abajo
resultado = Math.floor(2.9);

//Raiz cuadrada
resultado = Math.sqrt(25);


//Absoluto ignora valores negativos y convierte en positivo
resultado = Math.abs(-500);

//potencia

resultado = Math.pow(2, 4);

//Minimo de una serie de valores
resultado = Math.min(3, 5, 2, 1, 12, -4);


//maximo de una serie de valores
resultado = Math.max(3, 5, 2, 1, 12, -4);


//Aleatorio
resultado = Math.random()* 20; //No tan recomendable

//Aleatorio dentro de un rango
resultado = Math.floor(Math.random() *10000 );  //Numero del 1 al 30


console.log(resultado);