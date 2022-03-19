function calcularModa(lista){

    const listaCount={};

    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
            
        }
    )

    const listArray = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor){
           return valorAcumulado[1] - nuevoValor[1];
        }
    );
    
    const moda = listArray[listArray.length - 1];

    return moda;
}
