// Hay dos tipos de coerciones
// -Coercion implicita:
    // es cuando el lenguaje nos ayuda y cambia un tipo de valor a otro tipo de valor
    
    //En el caso del sigo + cuando los tipos de datos son distintos este genera una concatenacion y no una suma
    var a = 4 + "7";
    console.log(`4 + "7" es igual: ${a} el dato se ve como un numero pero en realidad es un ${typeof a}`);

    //En el caso del * si lo toma como multiplicacion aunque los tipos de datos sean diferentes
    var b = 4 * "7";
    console.log(`4 * "7" es igual: ${b} el tipo de dato es ${typeof b}`);

// -Coercion explicita:
    // es cuando nosotros obligamos a un tipo de valor cambie su tipo
    
    // Estamos haciendo que c se convierta en un string pero no es lo que buscamos 
    var c = 20
    var d = c + "";
    console.log(`var d = c + ""; es igual: ${d} el tipo  dato es ${typeof d}`);
    
    // Al usar String lo estamos forzando a ser un string
    var e = String(c);
    console.log(`var e = String(c); es igual: ${e} el tipo de dato es ${typeof e}`);
    
    // Ahora volvere hacer que c sea number
    var f = Number(c);
    console.log(`var f = Number(c); es igual: ${f} el tipo de dato es ${typeof f}`);