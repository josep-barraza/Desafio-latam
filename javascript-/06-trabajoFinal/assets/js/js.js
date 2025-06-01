 const cambioApi = async () => {
      try {
        const response = await fetch("https://mindicador.cl/api/");
        const data = await response.json();

        const input = document.querySelector("#input");
        const buscar = document.querySelector("#buscar");
        const monedas = document.querySelector("#monedas");
        const resultado = document.querySelector("#resultado");
        const canvas = document.getElementById('grafico');
        let chart = null;

        buscar.addEventListener("click", async () => {
          const cantidadPesos = parseFloat(input.value);
          const monedaSeleccionada = monedas.value;

          if (!cantidadPesos || monedaSeleccionada === "select") {
            resultado.textContent = "Por favor, ingresa un monto válido y selecciona una moneda.";
            return;
          }

          const valorMoneda = data[monedaSeleccionada].valor;
          const convertido = (cantidadPesos / valorMoneda).toFixed(2);
          resultado.textContent = `${cantidadPesos} CLP = ${convertido} ${monedaSeleccionada.toUpperCase()}`;

          // Obtener historial de los últimos 10 días
          const responseHistorial = await fetch(`https://mindicador.cl/api/${monedaSeleccionada}`);
          const dataHistorial = await responseHistorial.json();
          const ultimos10 = dataHistorial.serie.slice(0, 10).reverse();

          const fechas = ultimos10.map(d => new Date(d.fecha).toLocaleDateString("es-CL"));
          const valores = ultimos10.map(d => d.valor);

          // Si ya hay un gráfico, destrúyelo
          if (chart) chart.destroy();

          // Crear nuevo gráfico
          chart = new Chart(canvas, {
            type: 'line',
            data: {
              labels: fechas,
              datasets: [{
                label: `Valor de ${monedaSeleccionada.toUpperCase()} últimos 10 días`,
                data: valores,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
                tension: 0.1
              }]
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: false
                }
              }
            }
          });

        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    document.addEventListener("DOMContentLoaded", cambioApi);