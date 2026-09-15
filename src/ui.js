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
    contenedorPronostico,
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

export function mostrarPronostico(listaDias) {
// SE LIMPIAN LAS TARJETAS DEL HTML PARA EVITAR DUPLICADOS
    contenedorPronostico.innerHTML = '';
// SE RECORRE EL ARRAY DE PRONOSTICO Y SE CREA UNA TARJETA POR CADA DIA
    listaDias.forEach(dia => {
        const cardHTML = `
            <article class="card-pronostico">
                <span class="dia">${dia.dia}</span>
                <img src="https://openweathermap.org/img/wn/${dia.icono}.png" alt="${dia.descripcion}">
                <div class="temps">
                    <span class="max">Máx: ${dia.tempMax}°C</span>
                    <span class="min">Mín: ${dia.tempMin}°C</span>
                </div>
            </article>
            `;
    // SE AGREGA LA TARJETA AL CONTENEDOR
        contenedorPronostico.insertAdjacentHTML('beforeend', cardHTML);
    });
}