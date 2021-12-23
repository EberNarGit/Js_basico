var frutas = ["Pera", "Platano", "Mandarina", "Manzana", "fresa"];
console.log(frutas);

// longitud de un array
console.log(frutas.length);

// acceder a un elemento especifico
console.log(frutas[2]);

// agregar elementos arrays
frutas.push("Coco");
console.log(frutas);

// eliminar elementos de array
frutas.pop();
console.log(frutas);

// Agregar nuevo valor pero al inicio
frutas.unshift("Cereza");
console.log(frutas);

// eliminar el primer elemento del array
frutas.shift();
console.log(frutas);

// saber que esta en la posicion de un array
pos=frutas.indexOf("Pera");
console.log(pos);