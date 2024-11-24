// Función para obtener la ubicación en texto (nombre de la ciudad, país, etc.)
async function obtenerUbicacionTexto(lat, lon) {
  let ubicacionTexto = "Desconocido"; // Valor por defecto para la ubicación en texto

  try {
    // Obtener la ubicación en formato texto (nombre de la ciudad, país, etc.)
    const locationResponse = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`
    );

    const locationData = await locationResponse.json();
    ubicacionTexto =
      locationData?.address?.city ||
      locationData?.address?.county ||
      "Desconocido";
  } catch (error) {
    console.error("Error al obtener la ubicación:", error);
    // En caso de error, dejamos `ubicacionTexto` con el valor por defecto
  }

  return ubicacionTexto; // Retornamos la ubicación en texto
}

// Función para obtener el clima
export async function obtenerClima() {
  return new Promise((resolve, reject) => {
    // Obtener la ubicación actual
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          // Obtener la ubicación en texto
          const ubicacionTexto = "Weather API";

          // Realizar la petición a la API de Open-Meteo
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
          );
          const data = await response.json();

          if (data && data.current_weather) {
            // Descripción del clima basado en el código
            const descripcionClima = obtenerDescripcionClima(
              data.current_weather.weathercode
            );

            const clima = {
              temperatura: data.current_weather.temperature,
              ubicacion: ubicacionTexto, // Ubicación en texto
              descripcion: descripcionClima, // Descripción textual del clima
              icono: obtenerIcono(data.current_weather.weathercode), // Icono del clima
            };

            resolve(clima); // Resolvemos la promesa con el objeto clima
          } else {
            console.log("No se pudo obtener el clima.");
            reject("No se pudo obtener el clima.");
          }
        } catch (error) {
          console.error("Error al obtener el clima:", error);
          reject(error); // Rechazamos la promesa en caso de error
        }
      });
    } else {
      console.log("Geolocalización no soportada en este navegador.");
      reject("Geolocalización no soportada en este navegador.");
    }
  });
}

// Función para obtener el icono según el código del clima
function obtenerIcono(codigo) {
  const iconos = {
    0: "https://www.svgrepo.com/show/474587/clear.svg", // Soleado
    1: "https://www.svgrepo.com/show/474579/partly-cloudy.svg", // Parcialmente nublado
    2: "https://www.svgrepo.com/show/474575/negative.svg", // Mayormente nublado
    3: "https://www.svgrepo.com/show/474591/fog.svg", // Nublado
    45: "https://www.svgrepo.com/show/474569/jansa.svg", // Niebla
    51: "https://www.svgrepo.com/show/474568/light-rain.svg", // Lluvia ligera
    53: "https://www.svgrepo.com/show/474572/moderate-rain.svg", // Lluvia moderada
    61: "https://www.svgrepo.com/show/474586/thunderstorm.svg", // Tormentas
  };
  return (
    iconos[codigo] || "https://open-meteo.com/images/weather-icons/default.svg"
  ); // Default si no hay un código específico
}

// Función para obtener la descripción del clima basado en el código
function obtenerDescripcionClima(codigo) {
  const descripciones = {
    0: "Soleado",
    1: "Parcialmente nublado",
    2: "Mayormente nublado",
    3: "Nublado",
    45: "Niebla",
    51: "Lluvia ligera",
    53: "Lluvia moderada",
    61: "Tormentas",
  };
  return descripciones[codigo] || "Estado del clima desconocido"; // Default si no hay un código específico
}
