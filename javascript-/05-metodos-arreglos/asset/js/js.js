const botonAgregar = document.querySelector(".agregarBtn")
const agregarTareaInput = document.querySelector(".input")
const listTareas = document.querySelector(".agregartarea")
const listId = document.querySelector(".agregarId")
const borrarTareas =document.querySelector(".borrarTareas")
const tableList =document.querySelector(".tableList")


let tarea = [
  { id: 1, tarea: "Poner alarma", realizada: false },
  { id: 2, tarea: "Bañarse", realizada: false },
  { id: 3, tarea: "Tomar desayuno", realizada: false }
];


function renderizarTareas() {
  let html = `
    <tr><th>ID</th><th>Tareas</th><th></th><th></th></tr>
  `;

  for (let i = 0; i < tarea.length; i++) {
    html += `
      <tr>
        <td>${tarea[i].id}</td>
        <td>${tarea[i].tarea}</td>
        <td>
          <input type="checkbox" ${tarea[i].realizada ? "checked" : ""} onchange="marcarRealizada(${tarea[i].id})">
        </td>
        <td>
          <button onclick="borrar(${tarea[i].id})">Eliminar</button>
        </td>
      </tr>
    `;
  }

  tableList.innerHTML = html;
  actualizarContadores();
}


botonAgregar.addEventListener("click", () => {
  let nuevaTarea = agregarTareaInput.value.trim();
  if (nuevaTarea !== "") {
    tarea.push({ id: Date.now(), tarea: nuevaTarea });
    agregarTareaInput.value = "";
    renderizarTareas();
  }
});

//  eliminar una tarea
function borrar(id) {
  tarea = tarea.filter(t => t.id !== id);
  renderizarTareas();
}

// Llamar al renderizado al cargar la página
window.addEventListener("DOMContentLoaded", renderizarTareas);

function marcarRealizada(id) {
  const index = tarea.findIndex(t => t.id === id);
  if (index !== -1) {
    tarea[index].realizada = !tarea[index].realizada;
    renderizarTareas(); // actualiza vista y contadores
  }
}

function actualizarContadores() {
  const total = tarea.length;
  const realizadas = tarea.filter(t => t.realizada).length;
  const pendientes = total - realizadas;

  document.getElementById("total").textContent = total;
  document.getElementById("realizadas").textContent = realizadas;
  document.getElementById("pendientes").textContent = pendientes;
}