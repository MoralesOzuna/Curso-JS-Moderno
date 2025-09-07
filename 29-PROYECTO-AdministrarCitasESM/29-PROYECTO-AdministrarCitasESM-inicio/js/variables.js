import { generarId } from "./funciones.js"

/* let editando = false */// Asi era como estaba antes, solo que al ser un dato de tipo global, al utilizar modulos este tipo de variables las reconoce como constante, para evitar eso se crea un objeto con el valor

let editando = {
    value: false
}


const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}
export {
    editando, 
    citaObj
}