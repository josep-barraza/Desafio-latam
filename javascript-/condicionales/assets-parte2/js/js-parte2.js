
let fuego = parseInt(document.querySelector("#fuegoInput").value) || 0;
let bomba = parseInt(document.querySelector("#bombaInput").value) || 0;
let spiderman = parseInt(document.querySelector("#spidermanInput").value) || 0;

console.log(fuego)
console.log(bomba)
console.log(spiderman)



let boton =document.querySelector("button");

let parrafo=document.querySelector("p");

let stickers = (fuego + bomba + spiderman);
 console.log(stickers)

  parrafo.innerHTML = "Elegir stickers";
 console.log(parrafo) 

boton.addEventListener("click",() =>{

    let fuego = parseInt(document.querySelector("#fuegoInput").value) || 0;
let bomba = parseInt(document.querySelector("#bombaInput").value) || 0;
let spiderman = parseInt(document.querySelector("#spidermanInput").value) || 0;

let stickers = (fuego + bomba + spiderman);

    if(stickers <= 10 ){
      
        parrafo.textContent = `Llevas ${stickers} sticker ` ;
        parrafo.style.color = "green";
        
    }else {
        parrafo.innerHTML="Llevas demasiados stickers"
        parrafo.style.color = "red";
       
        }
  
})




