var piedra = "piedra";
var papel  = "papel";
var tijera = "tijera";

var jugador_1 = piedra;
var jugador_2 = tijera;

function mecanica(a, b){
    // piedra
    if(a == "piedra" && b == "papel"){
        console.log(`Jugador_2 gana porque ${a} le gana a ${b}`);
    }
    else if(a == "piedra" && b == "piedra"){
        console.log(`Jugadores empatados`);
    }
    else if(a == "piedra" && b == "tijera"){
        console.log(`Jugador_1 gana porque ${a} le gana a ${b}`);
    }
    // papel
    else if(a == "papel" && b == "papel"){
        console.log(`Jugadores empatados`);
    }
    else if(a == "papel" && b == "piedra"){
        console.log(`Jugador_1 gana porque ${a} le gana a ${b}`);
    }
    else if(a == "papel" && b == "tijera"){
        console.log(`Jugador_2 gana porque ${b} le gana a ${a}`);
    }
    // tijera
    else if(a == "tijera" && b == "papel"){
        console.log(`Jugador_1 gana porque ${a} le gana a ${b}`);
    }
    else if(a == "tijera" && b == "piedra"){
        console.log(`Jugador_2 gana porque ${b} le gana a ${a}`);
    }
    else if(a == "tijera" && b == "tijera"){
        console.log(`Jugadores empatados `);
    }else{
        console.log("fallo de programacion");
    }
}

mecanica(jugador_1,jugador_2)