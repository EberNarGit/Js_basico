//calcular perimetro y areas de figuras geometricas
console.log("hi");

//Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 25;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
    
} 

function areaCuadrado (lado){
    return lado ** 2;
} 
// console.log("la area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

console.group("Triangulos");
//Triangulo
// const ladoTriangulo1 = 25;
// const ladoTriangulo2 = 25;
// const baseTriangulo1 = 20;
// const alturaTriangulo = 10;

// console.log("los lados del triangulo miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " + baseTriangulo1 + "cm ");

// console.log("la altura del triangulo es " + alturaTriangulo + "cm ");

function perimetroTriangulo(lado,ladoA,base){
    const perimetro = lado + ladoA + base;
    return perimetro;
} 

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm ");

function areaTriangulo (base,altura){
    return (base*altura)/2;
} 

// console.log("El area del triangulo es: " + areaTriangulo + "cm ");

console.groupEnd();

//Circulos
console.group("Circulos");

// const radio = 4;
// console.log("El radio del circulo es: " + radio + "cm ");

function diametro (radio){
    return radio * 2;
}
 
// console.log("El diametro del circulo es: " + diametro + "cm ");

const pi = Math.PI;
// console.log("pi es igual a: " + pi + "cm ");

function circuferencia(radio){
    const diamet = diametro(radio);
    return diametro * pi;
}
// console.log("El perimetro del circulo es: " + circuferencia + "cm ");

function areaCirculo(radio){
    return pi*(radio**2);
} 
// console.log("El area del circulo es: " + area + "cm ");

console.groupEnd();

//boton cuadrado perimetro y area
function calcularPerimetroCuadrado(){
    const input = document.getElementById("cuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("cuadrado");
    const value = input.value;
    const area = areaCuadrado(value)
    alert(area);
}


//boton triangulo area y perimetro
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1");
    const value1 = Number(lado1.value);
    const lado2 = document.getElementById("lado2");
    const value2 = Number(lado2.value);
    const base = document.getElementById("base");
    const value3 = Number(base.value);
    const perimetro =  perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("base");
    const value3 = Number(base.value);
    const altura = document.getElementById("altura");
    const value4 = Number(altura.value);
    const area =  areaTriangulo(value3,value4);
    alert("El perimetro del triangulo es: " + area);
}

function calcularAltura(){
    const lado1 = document.getElementById("lado1");
    const value1 = Number(lado1.value);
    const lado2 = document.getElementById("lado2");
    const value2 = Number(lado2.value);
    const base = document.getElementById("base");
    const value3 = Number(base.value);
    const h =  calcularAlturaTriangulo(value1,value2,value3);
    alert(h);
}

function calcularAlturaTriangulo(a,b,c){
    if(a==b & a!=c || a==c & a!=b || b==c & b!=a){
        altura = Math.sqrt(a**2-(b**2/4));
        tipo = "isosceles";
        resultado = ("la altura del triangulo tipo: " + tipo + " es " + altura + " cm" );
    }
    else if(a==b & a==c & b==c){
        altura = Math.sqrt(3*a)/2
        tipo = "equilatero";
        resultado = ("la altura del triangulo tipo: " + tipo + " es " + altura + " cm" );
    }
    else if (a!=b & a!=c & b!=c){
        s = (a+b+c)/2;
        altura= 2/a * Math.sqrt(s*(s-a)*(s-b)*(s-c))
        tipo = "escaleno";
        resultado = ("la altura del triangulo tipo: " + tipo + " es " + altura + " cm" );
    }
    return resultado;
}