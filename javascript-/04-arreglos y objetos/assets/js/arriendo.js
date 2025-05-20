import { propiedadesAlquileres } from "./arrays.js";

let html="";

for(let arriendo of propiedadesAlquileres){

    html += `<div id="${arriendo.id}" class="arriendo">
    <img src="${arriendo.src}" />
    <h2>${arriendo.descripcion}</h2>
    <p><i class="fas fa-map-marker-alt"></i>- ${arriendo.ubicacion}</p>
    <p><i class="fas fa-bed"></i>- ${arriendo.espacio}</p>
    <p><i class="fas fa-dollar-sign"></i>- ${arriendo.valor}</p>
    <p class="mascotas"> ${arriendo.mascotas}</p>
    <p class="fumar"> ${ arriendo.sonaFumar}</p>
  </div>`
}
const divArriendo =document.querySelector(".divArriendos");
divArriendo.innerHTML = html;

const mascotasElements = document.querySelectorAll(".mascotas");
const fumarElements = document.querySelectorAll(".fumar");

// Recorrer cada par y aplicar los cambios
for (let i = 0; i < mascotasElements.length; i++) {
  const mas = mascotasElements[i];
  const fu = fumarElements[i];

  // Convertimos a texto en minúsculas para comparar
  const masTexto = mas.textContent.trim().toLowerCase();
  const fuTexto = fu.textContent.trim().toLowerCase();

  if (masTexto === "true") {
    mas.textContent = "Se permiten mascotas";
    mas.style.color = "green";
  } else {
    mas.textContent = "No se permiten mascotas";
    mas.style.color = "red";
  }

  if (fuTexto === "true") {
    fu.textContent = "Se permite fumar";
    fu.style.color = "green";
  } else {
    fu.textContent = "No se permite fumar";
    fu.style.color = "red";
  }
}


