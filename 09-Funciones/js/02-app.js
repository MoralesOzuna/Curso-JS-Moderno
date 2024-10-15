
//La mayor diferencia es que una funcion de tipo Function Declaration se puede llamar antes de declararse.
//La Function Expressión da error si la mandas a llamar antes de crearla
//Esto se debe en parte al Hoisting, que es un concepto pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript
//En la Function Declaration primero registras las funciones en una primera vuelta.
//En la segunda vuelta  la mando a llamar, incluso aunque esta se encuentre antes de ser declarada ya que fue registrada

//Declaracion de funcion (Function Declaration)
sumar();

function sumar(){
    console.log( 2 + 2);
}




//Expresion de Funcion (Function Expression)

sumar2();

const sumar2 = function(){
    console.log(3+3);
}
