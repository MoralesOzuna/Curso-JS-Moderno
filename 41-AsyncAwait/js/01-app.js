//Try catch es un codigo que nos permite intentar ejecutar codigo que tal vez no funcione, pero no impide la ejecucion del resto del codigo


console.log(1+1);
try{
    hola();
} catch(error){
    console.log(error);
};
console.log(2+2);