/*   Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y
amarillo (insertar estilos con atributo style). Cada uno de los divs debe tener
un identificador único -->

<!-- Dentro del script agrega el evento para que al hacer click a cada uno de los
divs, este cambie de color al color negro. Utiliza addEventListener para
agregar el evento -->
*/

let blue=document.querySelector("#azul");
let red=document.querySelector("#rojo");
let green=document.querySelector("#verde");
let yellow=document.querySelector("#amarillo");

let divs= [blue , red , green, yellow];
console.log(divs);

function cambiarcolor([i], color){
divs[i].style.color = color;

}

addEventListener("click",()=>{
    cambiarcolor([0],"black");
    cambiarcolor([1],"black");
    cambiarcolor([2],"black");
    cambiarcolor([3],"black");
})
