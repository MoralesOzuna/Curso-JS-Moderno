const usuario = true;
const puedePagar = true;


if(usuario && puedePagar ){ //Revisa se cumplan ambas condiciones
    console.log('Sí puedes comprar');
} else if(!puedePagar && !usuario ){
    console.log('No puedes comprar');
} else if(!usuario){ //Si no es usuario
    console.log('Inicia sesión o Crea una cuenta');
} else if(!puedePagar){
    console.log('Fondos insuficientes');
} 