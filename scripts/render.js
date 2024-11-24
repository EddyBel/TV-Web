import { obtenerClima } from "./clima.js";
import { Reloj } from "./reloj.js";
import { $ } from "./jquery.js";

function getWeather() {
  // Renderizar el clima en la pagina
  obtenerClima().then((response) => {
    console.log("Clima:", response);
    const temperature = response?.temperatura;
    const icon = response?.icono;
    const description = response?.descripcion;
    const location = response?.ubicacion;

    $("#weather-temperature").innerHTML = temperature;
    $("#weather-icon").src = icon;
    $("#weather-description").innerHTML = description;
    $("#wheather-location").innerHTML = location;
  });
}

getWeather();
setInterval(() => {
  getWeather();
}, 30000);

setInterval(() => {
  const date = new Reloj("short").getNowDate();

  $("#time-day").innerHTML = date.diaSemana;
  $("#time-date").innerHTML = date.fecha;
  $("#time-hour").innerHTML = date.hora;
}, 1000);

export function RenderChannelData(channel) {
  $("#channel-current-logo").src = channel.logo;
  $("#channel-current-name").innerHTML = channel.name;
  $("#channel-current-country").innerHTML = channel.country;
}

// Mostrar o esconder el connetor de controles

const container = $("#controls-container");

// Función para mostrar el contenedor
function showContainer() {
  container.style.opacity = "1";
  clearTimeout(inactivityTimeout); // Limpiar el temporizador de inactividad si el cursor vuelve
}

// Función para ocultar el contenedor después de 5 segundos de inactividad
let inactivityTimeout;
function startInactivityTimer() {
  inactivityTimeout = setTimeout(() => {
    if (container.style.opacity === "1") {
      container.style.opacity = "0";
    }
  }, 1000); // 5000 ms = 5 segundos
}

// Mostrar el contenedor cuando el cursor pasa sobre él
container.addEventListener("mouseenter", showContainer);

// Iniciar el temporizador de inactividad cuando el cursor sale del contenedor
container.addEventListener("mouseleave", startInactivityTimer);

// Iniciar el temporizador de inactividad cuando la página se carga
startInactivityTimer();
