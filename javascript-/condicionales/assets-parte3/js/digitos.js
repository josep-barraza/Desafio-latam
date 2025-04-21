let button =document.querySelector("button");

let texto= document.querySelector("h4")



button.addEventListener("click",()=>{
    
let digito1=document.querySelector("#primerDigito").value;
    
let digito2=document.querySelector("#segundoDigito").value;
   
let digito3=document.querySelector("#tercerDigito").value;
 
let password= digito1+digito2+digito3 ;
    

    if( password == "911" ){
       texto.innerHTML="password 1 correcto";
       texto.style.color = "green";
    } else if(password == "714" ){
        texto.innerHTML="password 2 correcto"
       texto.style.color = "green";
    }else{
        texto.innerHTML="password incorrecto"
        texto.style.color = "red";
    } 
})