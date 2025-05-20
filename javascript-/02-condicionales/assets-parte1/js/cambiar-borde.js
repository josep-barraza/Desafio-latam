
    let borde = document.querySelector("img");
    let parrafo=document.querySelector("p")
     
    /* haciendo click a la imagen */

   borde.addEventListener("click", () => {
      
      if (borde.style.border === "2px solid red") {
        borde.style.border = '';
        parrafo.innerHTML = "Sin bordes"; 
      } else {
        borde.style.border = "2px solid red";
        parrafo.innerHTML = "Con bordes" 
      }
    });

/* haciendo click al boton */

let button =document.querySelector("button")
button.addEventListener("click",() =>{

    
    if (borde.style.border === "2px solid red") {
        borde.style.border = ""; 
        parrafo.innerHTML = "Sin bordes"; 
    }   else{
        borde.style.border = "2px solid red";
        parrafo.innerHTML = "Con bordes" 
    }
})

  