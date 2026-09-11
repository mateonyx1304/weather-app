// SE IMPORTAN LOS ELEMENTOS DEL DOM
import {
    ciudad,
    temperatura,
    descripcion,
    sensacion,
    humedad,
    presion,
    viento,
    visibilidad,
    iconoClima,
}   from './dom.js';

// FUNCION QUE RECIBE LOS DATOS LIMPIOS Y LOS MUESTRA EN EL DOM
export function mostrarClimaActual(datos) {
    ciudad.textContent = datos.ciudad; 
    temperatura.textContent = `${datos.temperatura}°C`;
    descripcion.textContent = datos.descripcion;
    sensacion.textContent = `Sensación térmica: ${datos.sensacion}°C`;
    humedad.textContent = `Humedad: ${datos.humedad}%`;
    presion.textContent = `Presión: ${datos.presion} hPa`;
    viento.textContent = `Viento: ${datos.viento} m/s`;
    visibilidad.textContent = `Visibilidad: ${datos.visibilidad} km`;
    iconoClima.src = datos.icono;
}