var estudiante = ["Eber", "Eliud", "a", "b"];

function saludar(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i<estudiante.length; i++){
    saludar(estudiante[i]);
}

for(var estudiantes of estudiante){
    saludar(estudiantes);
}