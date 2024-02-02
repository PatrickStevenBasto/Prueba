// Función para capitalizar la primera letra
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Función para obtener la fecha y hora en Bogotá
function getFechaHoraBogota() {
    var now = new Date();
    var utc = now.getTime() + now.getTimezoneOffset() * 60000;
    var fechaHoraBogota = new Date(utc + (3600000 * -5)); // Ajustar UTC a Bogotá (UTC-5)
    return fechaHoraBogota;
}

// Script para obtener y mostrar la fecha y hora en Bogotá
document.addEventListener("DOMContentLoaded", function() {
    // Obtener la fecha y hora en Bogotá
    var fechaHoraBogota = getFechaHoraBogota();

    // Obtener el día de la semana en formato local
    var optionsDiaSemana = { weekday: 'long' };
    var diaSemana = fechaHoraBogota.toLocaleDateString('es-ES', optionsDiaSemana);
    diaSemana = capitalizeFirstLetter(diaSemana);
    document.getElementById("diaSemana").innerText = diaSemana;

    // Obtener el nombre del mes en formato local
    var optionsMes = { month: 'long' };
    var nombreMes = fechaHoraBogota.toLocaleDateString('es-ES', optionsMes);
    nombreMes = capitalizeFirstLetter(nombreMes);
    document.getElementById("nombreMes").innerText = nombreMes;

    // Obtener el año
    var ano = fechaHoraBogota.getFullYear();
    document.getElementById("ano").innerText = ano;

    // Obtener la hora en formato local
    var horaBogota = fechaHoraBogota.toLocaleTimeString('es-CO');
    document.getElementById("horaBogota").innerText = horaBogota;
});

document.addEventListener("DOMContentLoaded", function() {
    var area8 = document.querySelector(".area8");
    var progreso = document.getElementById("progreso");
    var mesHora = document.getElementById("mesHora");

    function actualizarBarraCarga() {
        var fechaActual = new Date();
        var ultimoDiaMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();
        var porcentaje = (fechaActual.getDate() / ultimoDiaMes) * 100;

        progreso.style.width = porcentaje + "%";

        var nombreMes = fechaActual.toLocaleDateString('es-ES', { month: 'long' });
        var mesAbreviado = nombreMes.slice(0, 3).charAt(0).toUpperCase() + nombreMes.slice(0, 3).slice(1);

        var horaActual = fechaActual.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: true });

        mesHora.textContent = mesAbreviado + " | " + horaActual;
    }

    // Actualizar la barra de carga cada segundo
    setInterval(actualizarBarraCarga, 1000);

    // Inicializar la barra de carga
    actualizarBarraCarga();
});
