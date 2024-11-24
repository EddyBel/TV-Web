export class IPTV {
  constructor() {
    this.useProxy = true;
    this.proxyWebsite = "https://proxy.com/";
  }

  // Método para obtener una lista de canales desde un archivo M3U
  async getChannelsFromM3U(m3uUrl) {
    try {
      const response = await fetch(m3uUrl);
      if (!response.ok) {
        throw new Error(
          `No se pudo cargar el archivo M3U: ${response.statusText}`
        );
      }

      const text = await response.text();
      const lines = text.split("\n");
      const channels = [];
      let currentChannel = null;

      for (const line of lines) {
        if (line.startsWith("#EXTINF")) {
          const nameMatch = line.match(/,(.+)/); // Nombre del canal
          const logoMatch = line.match(/tvg-logo="([^"]+)"/); // Logo del canal
          const countryMatch = line.match(/tvg-country="([^"]+)"/); // País
          const regionMatch = line.match(/tvg-region="([^"]+)"/); // Región
          const channelType = line.match(/(abierto|privado)/i); // Tipo de canal

          currentChannel = {
            name: nameMatch ? nameMatch[1] : "Desconocido",
            logo: logoMatch ? logoMatch[1] : null,
            url: null,
            country: countryMatch ? countryMatch[1] : "Desconocido",
            region: regionMatch ? regionMatch[1] : "Desconocido",
            type: channelType ? channelType[1] : "Desconocido", // Determinado por nombre o una API externa
          };
        } else if (line.startsWith("http") && currentChannel) {
          currentChannel.url = line;
          channels.push(currentChannel);
          currentChannel = null;
        }
      }

      return channels;
    } catch (error) {
      console.error("Error al procesar el archivo M3U:", error);
      return [];
    }
  }

  // Aquí podrías agregar métodos adicionales para obtener la programación EPG si tienes acceso a una fuente
  async getProgramSchedule(channelUrl) {
    // Ejemplo de método para obtener programación de un canal a través de un API EPG
  }
}
