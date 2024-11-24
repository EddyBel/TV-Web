import { IPTV } from "./IPTV.js";
import { $ } from "./jquery.js";
import { RenderChannelData } from "./render.js";

document.addEventListener("DOMContentLoaded", () => {
  const videoPlayer = document.getElementById("videoPlayer");
  const channelListContainer = document.getElementById("list-channels");
  const containerChannels = document.getElementById(
    "channellist-container-bottom"
  );

  // const m3uUrl = "https://iptv-org.github.io/iptv/countries/mx.m3u";
  const m3uUrl2 = "https://iptv-org.github.io/iptv/index.m3u";

  new IPTV().getChannelsFromM3U(m3uUrl2).then((channels) => {
    $("#channel-list").innerHTML = ""; // Limpia la lista de canales

    // Iterar sobre los canales y crear los elementos
    channels.forEach((channel, index) => {
      // Define un canal por defecto para Azteca 7 (720p) [Geo-blocked]
      if (channel.name === "Azteca 7 (720p) [Geo-blocked]") {
        loadChannel(channel.url);
        RenderChannelData(channel);
      }

      const gridItem = document.createElement("li");
      gridItem.className =
        "flex items-center gap-3 p-2 hover:bg-neutral-950 transition-background duration-200 cursor-pointer rounded-xl text-white text-nowrap";

      gridItem.innerHTML = `
        <img
                  src="${channel.logo}"
                  alt=""
                  class="w-[30px] h-[30px] rounded-sm object-contain"
                  onerror="this.src='https://static.vecteezy.com/system/resources/previews/007/688/855/non_2x/tv-logo-free-vector.jpg';"
                />
                <div class="text-white font-bold">
                  <h1 class="text-[10px]">${channel.name}</h1>
                  <p class="text-[10px] opacity-80">${channel.country}</p>
                </div>
      `;

      // Añadir evento de clic para cargar el canal
      gridItem.addEventListener("click", () => {
        loadChannel(channel.url);
        RenderChannelData(channel);
      });

      $("#channel-list").appendChild(gridItem);
    });
  });

  // Función para cargar el canal seleccionado
  const loadChannel = (url) => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(videoPlayer);
    } else if (videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
      videoPlayer.src = url;
    } else {
      alert("HLS no es compatible con tu navegador.");
    }
  };
});
