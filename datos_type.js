//Tipos de datos en JS:
    //-Tipos Primitivos:
        //-String: cadenas de Texto
            let nombre = "Eber"
        //-Number: Valores numericos
            let numero = 1234;
        //-Boolean: verdadero o falso
            let hombre = true;
        //-Null: Tipo especial, contiene null
            //Es cuando un dato no existe
            if(x != null){
                alert(`Hola ${x}`)
            }
        //-Undefined: Tipo especial, contiene undefined
            //Existe cuando no se le asigna un valor a una variable
            let b;
    //-Tipos Objeto:
        //-Tipos predefinidos de JS
            //-Date (fechas)
            //-RegExp (Expresiones regulares)
            //-Error (datos de error)    
        //-Tipos definidos por el programador
            //-Funciones simples
            //-Clases  
            var humano = {
                edad: 38,
                altura: 170,
                apeido: "Alvarado",
            };
        //-Arrays
            //-Serie de elementos o matriz lo consideramos un objeto especial
            const array = ['Eber','Eliud','Rodriguez','Alvarado']
        //-Objetos especiales
            //-Objeto global
            //-Objeto prototipo
            //-Otros  
