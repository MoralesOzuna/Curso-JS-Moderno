/* IIFE
    ➡️ Immediately Invoked Function Expression
    (en español: Expresión de Función Ejecutada Inmediatamente).

    Es una función que se ejecuta en el mismo momento en que se define, sin necesidad de llamarla después.

    ✅ Hoy en día los IIFE se usan mucho menos porque tenemos:

    Módulos (import/export) → que aíslan automáticamente.

    let/const y bloques {} → que limitan el scope.
    

(function(){
    console.log('Desde un IIFE');
    const nombreCliente = 'Juan'; //Esto nos permita simular un bloque privado por decirlo de alguna manera. Para que estas variables no sean utilizadas en otros archivos.


    //window.nombreCliente = 'Juan'; De esta manera aunque esta dentro del IIFE se guarda variable en la ventana global por lo que ya es accesible
}) ();

*/


export const nombreCliente = 'Juan'; //Esto nos permite exportar una variable
export const ahorro = 200;


export function mostrarInformacion(nombre, ahorro){
    return `Cliente ${nombre} - Ahorro: ${ahorro}`
}

export function tienesSaldo(ahorro){
    if(ahorro>0){
        console.log('Si tiene saldo')
    } else{
        console.log('no tienes Saldo')
    }
}

export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}


export default function nuevaFuncion(){
    console.log('Este es el export default');
}