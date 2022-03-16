function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}


function calcularMediana(lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    const mitadLista = parseInt(lista.length/2);
    let mediana;

    if (lista.length % 2===0){
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];

        const promedio1y2 = calcularMediaAritmetica([elemento1,elemento2,]);

        mediana = promedio1y2;

    }else{
        mediana = lista[mitadLista];
    }

    return mediana;
}