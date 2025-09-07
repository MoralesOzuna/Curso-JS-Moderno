import nuevaFuncion /* Esto de afuera es parte del export default */, { nombreCliente, ahorro, mostrarInformacion, tienesSaldo, Cliente} from "./cliente.js"; //Para hacer referencia a la misma carpeta agregamos "./cliente"
import { Empresa } from "./empresa.js";

nuevaFuncion();



console.log(nombreCliente)
console.log(ahorro)

console.log(mostrarInformacion(nombreCliente, ahorro));
tienesSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());

//Importar empresa
const empresa = new Empresa('codigo con juan', 100, 'Aprendizaje en Linea');

console.log(empresa.mostrarInformacion());