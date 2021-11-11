//El alcance (scope) de una variable puede ser:
//1- Global:
var miNombre = "Eber";

//2- Local:
function nombre(){
    var miApellido = "Alvarado";
    console.log(miNombre+ " " + miApellido);
}

nombre(); //Devuelve "Eber Alvarado"

//En todo el código podemos utilizar la variable global.
//Las variables locales sólo pueden ser accedidas 
//dentro de la función en la que fueron declaradas.