// Condiconal if

var edad = 22;
if(edad === 18){
    console.log(`ya puedes votar`);

}else if(edad > 18){
    console.log(`puedes votar`);
}
else{
    console.log(`aun no tienes la edad suficiente`)
}


// Operador ternario
// Sintaxis condicion ? true : false
// Ejemplo:
    var numero = 1;
    var resultado = numero === 1 ? "Soy un 1" : "no soy un 1 :(";
    console.log(resultado);