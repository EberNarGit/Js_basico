
//Obtengo todos los valores del arreglo mexico especificamente su atributo salary
const salariosMex = mexico.map(
    function(persona){
        return parseFloat(persona.salary);
    }
)

//ordeno el arreglo de menor a mayor
const salariosMexSorted = salariosMex.sort(function(salaryA, salaryB){return salaryA - salaryB;});

function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const promedio1y2 = calcularMediaAritmetica([personaMitad1,personaMitad2]);

        return promedio1y2;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

console.log(medianaSalarios(salariosMexSorted));