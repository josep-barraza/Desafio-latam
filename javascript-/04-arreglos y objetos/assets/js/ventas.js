
import { propiedadesVentas } from "./arrays.js";

let html="";

for(let venta of propiedadesVentas){

    html += `<div id="${venta.id}" class="ventas">
    <img src=${venta.src} />
    <h2>${venta.descripcion}</h2>
    <p><i class="fas fa-map-marker-alt"></i>- ${venta.ubicacion}</p>
    <p><i class="fas fa-bed"></i>- ${venta.espacio}</p>
    <p><i class="fas fa-dollar-sign"></i>- ${venta.valor}</p>
    <p class="mascotas"> ${venta.mascotas}</p>
    <p class="fumar">${venta.sonaFumar}</p>
  </div>`
}
const divVentas =document.querySelector(".divVentas");
divVentas.innerHTML = html;

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