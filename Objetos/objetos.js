var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

console.log(miAuto.annio);
miAuto.detalleDelAuto();