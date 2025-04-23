/*  Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y
amarillo (insertar estilos con atributo style). Cada uno de los divs debe tener
un identificador único -->

<!-- Dentro del script agrega el evento para que al hacer click a cada uno de los
divs, este cambie de color al color negro. Utiliza addEventListener para
agregar el evento -->

<!--Crea una página junto a un script que guarde dentro de una variable global
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





function cambioDeColor(id){

    let divs = document.querySelector(id);
     divs.addEventListener("oclick",()=> {

divs.style.colo = "black"

     }  )
    }

    cambioDeColor("#azul")
    cambioDeColor("#rojo")
    cambioDeColor("#verde")
    cambioDeColor("#amarillo")






document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    /* Cambiar a color 1 */
    } else if (event.key === 's') {
    /* Cambiar a color 2 */
    }
    })