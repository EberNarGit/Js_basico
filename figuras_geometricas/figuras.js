//calcular perimetro y areas de figuras geometricas
console.log("hi");

//Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 25;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * 2;
console.log("la area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

console.group("Triangulos");
//Triangulo
const ladoTriangulo1 = 25;
const ladoTriangulo2 = 25;
const baseTriangulo1 = 20;
const alturaTriangulo = 10;

console.log("los lados del triangulo miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " + baseTriangulo1 + "cm ");

console.log("la altura del triangulo es " + alturaTriangulo + "cm ");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo1;

console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm ");

const areaTriangulo = (baseTriangulo1*alturaTriangulo)/2;

console.log("El area del triangulo es: " + areaTriangulo + "cm ");

console.groupEnd();

//Circulos
console.group("Circulos");

const radio = 4;
console.log("El radio del circulo es: " + radio + "cm ");

const diametro = radio * 2;
console.log("El diametro del circulo es: " + diametro + "cm ");

const pi = Math.PI;
console.log("pi es igual a: " + pi + "cm ");

const circuferencia = diametro * pi;
console.log("El perimetro del circulo es: " + circuferencia + "cm ");

const area = pi*(radio**2);
console.log("El area del circulo es: " + area + "cm ");

console.groupEnd();