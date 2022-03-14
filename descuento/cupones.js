

const coupons = [
    "STORE10",
    "STORE25",
    "STORE50",
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = ((precio * porcentajePrecioConDescuento)/100);

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    let descuento;

    switch(cuponValue){
        case coupons[0]:
            descuento = 10;
        break;

        case coupons[1]:
            descuento = 25;
        break;

        case coupons[2]:
            descuento = 50;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

    
}