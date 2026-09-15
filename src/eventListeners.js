// SE IMPORTAN LOS ELEMENTOS QUE SE NECESITAN DEL DOM

import {inputCiudad, btnBuscar} from './dom.js';
import {obtenerClimaActual, obtenerPronostico} from './api.js';
import {procesarClimaActual, procesarPronostico} from './weatherService.js';
import {mostrarClimaActual, mostrarPronostico} from './ui.js';

// SE CREA LA FUNCIÓN ENCARGADA DE EJECUTAR LA BÚSQUEDA

async function realizarBusqueda() {
// Leemos el texto del input y quitamos espacios extra al inicio/final con .trim()
    const ciudad = inputCiudad.value.trim();

// Validamos que el usuario no haya dejado el campo vacío
    if (!ciudad) {
        alert('Por favor, ingresa el nombre de una ciudad.');
        return;
    }

    try {
// SE OBTIENEN LOS DATOS DE LA API: CLIMA ACTUAL Y PRONOSTICO
        const datosClimaCrudos = await obtenerClimaActual(ciudad);
        const datosPronosticoCrudos = await obtenerPronostico(ciudad);
// SE PROCESAN Y LIMPIAN LOS DATOS PARA OBTENER SOLO LO NECESARIO
        const climaLimpio = procesarClimaActual(datosClimaCrudos);
        const pronosticoLimpio = procesarPronostico(datosPronosticoCrudos);
// SE RENDERIZAN AMBAS SECCIONES DE LA INTERFAZ
        mostrarClimaActual(climaLimpio);
        mostrarPronostico(pronosticoLimpio);
// LIMPIAMOS EL INPUT
        inputCiudad.value = '';
    } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
        alert('No se pudo obtener la información del clima. Por favor, verifica el nombre de la ciudad e intenta nuevamente.');
    }
}

// SE AGREGA EL EVENT LISTENER QUE ACTIVE LOS ESCUCHADORES DE EVENTOS

export function inicializarEventos(){
// Escuchar el click en el botón
    btnBuscar.addEventListener('click', realizarBusqueda);

// Escuchar la tecla "Enter" en el input
    inputCiudad.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            realizarBusqueda();
        }
    });
}