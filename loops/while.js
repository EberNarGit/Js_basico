var estudiantes = ["Eber", "Eliud", "a", "b"];

function saludar(estudiante){
    console.log(`Hola ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}