
function calcularMedioRango(lista){

    lista.sort(function(a, b){return a - b});

    const Mayor = lista[0];
    const Menor = lista.pop();

    return (Menor+Mayor)/2;
}

