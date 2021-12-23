// Piedra papel o tijeras con switch

var jugador_1 = "tijeras";
var jugador_2 = "piedra";
switch (jugador_1){
    case "tijeras":
        switch (jugador_2){
        case "tijeras":
            console.log("jugadores empatados");
            break;
        case "papel":
            console.log("jugador 1 gana");
            break;
        case "piedra":
            console.log("jugador 2 gana");
            break;    
        }
        break;
    case "piedra":
        switch (jugador_2){
            case "piedra":
                console.log("jugadores empatados");
                break;
            case "tijeras":
                console.log("jugador 1 gana");
                break;
            case "papel":
                console.log("jugador 2 gana");
                break;    
            }
        break;
    case "papel":
        switch (jugador_2){
            case "papel":
                console.log("jugadores empatados");
                break;
            case "piedra":
                console.log("jugador 1 gana");
                break;
            case "tijeras":
                console.log("jugador 2 gana");
                break;    
            }
        break;
    default:
        console.log("error en el programa");
}