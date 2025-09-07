/*  
    WeakSet
    Este tipo de estructura se utiliza para guardar propiedades temporales que solo se consultaran un par de ocasiones y posteriormente el "garbage collector" (Que es un mecanimso de javascript para liberar memoria cuando un objeto ya no es accesible en el programa)
        1. WeakSet solo acepta objetos 
        2. weakset no cuenta con .size, por ello no es posible saber la extension del weakset
        3. No son iterables
        
*/

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

const nombre = 'Juan';

weakset.add(cliente);
console.log(weakset.has(cliente)); //Nos indica true si es que existe
weakset.delete(cliente);
console.log(cliente.size) //No existe en el weakset

console.log(weakset);