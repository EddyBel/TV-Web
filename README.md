<h1 align="center" >TV-Web</h1>

<p align="center">Reproductor de Canales en la Web</p>

<p align="center">
 <img alt="banner_01" src="https://img.shields.io/github/last-commit/EddyBel/TV-Web?color=%23AED6F1&style=for-the-badge" />
 <img alt="banner_02" src="https://img.shields.io/github/license/EddyBel/TV-Web?color=%23EAECEE&style=for-the-badge" />
 <img alt="banner_03" src="https://img.shields.io/github/languages/top/EddyBel/TV-Web?color=%23F9E79F&style=for-the-badge" />
 <img alt="banner_04" src="https://img.shields.io/github/languages/count/EddyBel/TV-Web?color=%23ABEBC6&style=for-the-badge" />
 <img alt="banner_05" src="https://img.shields.io/github/languages/code-size/EddyBel/TV-Web?color=%23F1948A&style=for-the-badge" />
</p>

**TV-Web** es un proyecto personal que he desarrollado para permitir la reproducción de canales IPTV directamente desde el navegador. Mi objetivo es ofrecer una interfaz moderna y fácil de usar, con detalles útiles como el clima, la fecha, la hora y una lista interactiva de canales.

## Créditos

Los canales IPTV utilizados en este proyecto provienen del repositorio [iptv-org/iptv](https://github.com/iptv-org/iptv). Agradezco profundamente a la comunidad de [iptv-org](https://github.com/iptv-org) por su esfuerzo al mantener y compartir estas listas.

![Vista previa del proyecto](./assets/Captura%20de%20pantalla%202024-11-24%20150838.png)
![Vista previa del proyecto](./assets/Captura%20de%20pantalla%202024-11-24%20150830.png)

## Características actuales

- **Reproducción de canales IPTV:** Puedes ver canales IPTV directamente desde el navegador sin necesidad de plugins adicionales.
- **Interfaz amigable:** La página muestra información como el clima, la fecha y la hora mientras navegas por los canales.
- **Lista interactiva de canales:** Es posible explorar los canales disponibles y seleccionarlos para su reproducción en vivo.
- **Diseño responsive:** La página funciona tanto en dispositivos móviles como de escritorio.
- **Simplicidad tecnológica:** Utilizo solo HTML, CSS y JavaScript para garantizar compatibilidad con navegadores modernos.

## Próximos pasos

### En desarrollo

1. **Soporte para canales HTTP a través de proxy HTTPS:**

   - Algunos navegadores bloquean streams en HTTP por razones de seguridad. Estoy implementando un proxy para convertir esas transmisiones a HTTPS y garantizar que puedan reproducirse sin problemas.

2. **Filtros de canales:**

   - Quiero incluir opciones para filtrar canales según idioma, país, género o calidad de la transmisión, lo que facilitará encontrar lo que buscas.

3. **Información adicional de canales:**
   - Estoy explorando formas de obtener detalles avanzados como la programación de los canales, descripciones y eventos destacados.

### Ideas para el futuro

1. **Soporte para reproducción de torrents en streaming:**

   - Me encantaría incluir la opción de reproducir archivos o enlaces torrent directamente desde la página, permitiendo disfrutar contenido sin necesidad de descargas completas.

2. **Guía electrónica de programación (EPG):**
   - Planeo desarrollar una guía interactiva que permita ver la programación de los canales y seleccionar transmisiones futuras o pasadas, si el canal soporta esa funcionalidad.

## Tecnologías utilizadas

- **HTML5:** Para la estructura de la página.
- **CSS3:** Para estilos modernos y diseño adaptable.
- **JavaScript:** Para las funcionalidades interactivas y la carga dinámica de contenido.
- **Streams IPTV:** Manejo de listas M3U para cargar y reproducir transmisiones.

## Cómo probarlo

1. **Clonar el repositorio**

   Si quieres probar este proyecto, primero clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/TV-Web.git
   ```

2. **Accede a la carpeta del proyecto**

   ```bash
   cd TV-Web
   ```

3. **Abre el archivo index.html**

   Simplemente abre el archivo `index.html` en tu navegador.

   ```bash
   open index.html
   ```

## Cómo usarlo

1. Accede a la página principa [TV Web](https://eddybel.github.io/TV-Web/) para explorar la lista de canales disponibles.
2. Haz clic en un canal para comenzar a verlo en vivo.
3. La interfaz muestra información en tiempo real mientras disfrutas de tus canales favoritos.

## Contribuciones

Si te interesa mejorar este proyecto, ¡eres más que bienvenido! Estos son los pasos para contribuir:

1. Haz un fork de este repositorio.
2. Crea una nueva rama para tus cambios (`git checkout -b nueva-funcionalidad`).
3. Realiza los cambios que quieras y haz un commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a tu rama (`git push origin nueva-funcionalidad`).
5. Abre un pull request para que pueda revisarlo.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar más detalles en el archivo [LICENSE](LICENSE).

Si tienes alguna sugerencia o simplemente quieres compartir tus comentarios, ¡no dudes en decírmelo! Estoy constantemente buscando formas de mejorar esta idea.

---

<p align="center">
  <a href="https://github.com/EddyBel" target="_blank">
    <img alt="Github" src="https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=Github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/eduardo-rangel-eddybel/" target="_blank">
    <img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>
