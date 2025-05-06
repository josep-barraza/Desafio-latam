/* <!--Crea una página junto a un script que guarde dentro de una variable global
un color dependiendo de la letra del teclado presionada. (2 Puntos).
○ La letra a guardará el color rosado.
○ La letra s guardará el color naranjo.
○ La letra d guardará el color celeste.
○ Para guardar el color revisa el tip al final del enunciado.
○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
color blanco y borde negro.
○ Al presionar las teclas a, s o d, se deberá cambiar el color del div
“key” a rosado, naranjo o celeste respectivamente.
● Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se
deberá crear un div nuevo de las mismas dimensiones antes mencionadas
con los colores morado, gris y café respectivamente.   */



let cambioColor="";



document.addEventListener('keydown', function (event) {

    const key = event.key.toLowerCase();
    const divkey=document.querySelector("#key");

if (key === 'a' || key === "A") {

    cambioColor = "pink";
    divkey.style.backgroundColor = cambioColor;

    /* Cambiar a color 1 */
  } else if (key === 's' || key === "S") {

    cambioColor = "orange";
    divkey.style.backgroundColor = cambioColor;

    /* Cambiar a color 2 */
  }else if(key === "d" || key === "D"){

    cambioColor = "skyblue";
    divkey.style.backgroundColor= cambioColor;

    /* cambio a color 3 */

  }else if(key === "q" || key === "Q"){

    nuevoDiv("purple")

  }else if(key === "w" || key === "W"){

    nuevoDiv("grey")

  }else if(key === "e" || key === "E"){

     nuevoDiv("brown")

  }

    })

    function nuevoDiv(color){

        const divNuevo = document.createElement("div");
        
        divNuevo.className = "color-div";
    
        divNuevo.style.backgroundColor = color;
    
       document.body.appendChild(divNuevo)
    
     }   
