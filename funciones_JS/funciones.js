//hay dos tipos de funciones
// funciones declarativas

function miFuncion(){
    return 3;
}

//asi hago el llamado
miFuncion();

// funciones de expresion
//declaramos una variable que guarda una funcion
// los parametros van dentro de los parentesis cuando declaro la funcion
var miXFuncion = function(a, b){
    return a + b;
}

//asi hago el llamado
miXFuncion(2, 3);

function saludarEstudiantes(estudiante) { 
    console.log(`hola ${estudiante}`); 
}

function sumar(a, b){ 
    var resultado = a + b; 
    return resultado;
}