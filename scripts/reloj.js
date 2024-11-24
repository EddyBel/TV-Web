export class Reloj {
  constructor(monthsFormat, daysFormat) {
    this.fecha = new Date(); // Creamos una nueva instancia de la fecha actual
    this.daysFormat = daysFormat || "complete"; // complete \ short \ numbers \ abbr
    this.monthsFormat = monthsFormat || "complete"; // complete \ short \ numbers \ abbr
    this.DaysFormats = {
      complete: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ],
      short: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
      numbers: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
      abbr: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    };

    this.MonthsFormats = {
      complete: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      short: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      numbers: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      abbr: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
    };
  }

  // Método para obtener la hora actual en formato 12h (AM/PM), día de la semana y fecha
  getNowDate() {
    // Obtener hora, minuto, segundo
    let horas = this.fecha.getHours();
    let minutos = this.fecha.getMinutes();
    let segundos = this.fecha.getSeconds();

    // Determinar AM o PM
    const amPm = horas >= 12 ? "PM" : "AM";
    // Convertir hora al formato de 12 horas
    horas = horas % 12;
    horas = horas ? horas : 12; // La hora 0 debe ser 12
    minutos = minutos < 10 ? "0" + minutos : minutos; // Agregar un 0 a los minutos si es menor a 10
    segundos = segundos < 10 ? "0" + segundos : segundos; // Agregar un 0 a los segundos si es menor a 10

    // Obtener el nombre del día de la semana
    let diaSemana;

    if (this.daysFormat === "complete") {
      diaSemana = this.DaysFormats.complete[this.fecha.getDay()];
    } else if (this.daysFormat === "short") {
      diaSemana = this.DaysFormats.short[this.fecha.getDay()];
    } else if (this.daysFormat === "numbers") {
      diaSemana = this.DaysFormats.numbers[this.fecha.getDay()];
    } else if (this.daysFormat === "abbr") {
      diaSemana = this.DaysFormats.abbr[this.fecha.getDay()];
    } else {
      diaSemana = this.DaysFormats.complete[this.fecha.getDay()];
    }

    // Obtener el nombre del mes

    let mesText;
    if (this.monthsFormat === "complete") {
      mesText = this.MonthsFormats.complete[this.fecha.getMonth()];
    } else if (this.monthsFormat === "short") {
      mesText = this.MonthsFormats.short[this.fecha.getMonth()];
    } else if (this.monthsFormat === "numbers") {
      mesText = this.MonthsFormats.numbers[this.fecha.getMonth()];
    } else if (this.monthsFormat === "abbr") {
      mesText = this.MonthsFormats.abbr[this.fecha.getMonth()];
    } else {
      mesText = this.MonthsFormats.abbr[this.fecha.getMonth()];
    }
    const dia = this.fecha.getDate();
    const mes = mesText;
    const año = this.fecha.getFullYear();

    // Crear el objeto con la hora en formato 12h, día de la semana y fecha
    return {
      hora: `${horas}:${minutos} ${amPm}`,
      diaSemana: diaSemana,
      fecha: `${dia} ${mes} ${año}`,
    };
  }
}
