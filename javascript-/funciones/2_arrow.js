/* Transforma la siguiente función a una arrow function de una línea. Este ejercicio
debe quedar en un archivo llamado */

/* let suma = function(a, b){
    return a + b
    }

    console.log(suma(1,2)+" (Ejercicio 2)   ") */

    suma = (a , b) => a + b


console.log(suma ( 5 , 5 ) + " con solo una linea de codigo en el cuerpo (Ejercicio 2)")

    sumaRestaMultiplicacion = (c , d ) => {
        if ( c > d ){
            return c - d;
        }else if ( c < d  ){
            return c + d;
        }else {
            return c * d;
        }
    }

   /*  con mas de una linea en el cuerpo */

    console.log(sumaRestaMultiplicacion(10 , 5) + " resta (Ejercicio 2)")
    console.log(sumaRestaMultiplicacion(5 , 6) + " suma (Ejercicio 2)")
    console.log(sumaRestaMultiplicacion(10 , 10) + " multiplicacion (Ejercicio 2)")