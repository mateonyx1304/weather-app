// 1. IMPORTACIONES
import { inputCiudad, btnBuscar } from './dom.js';
import { guardarUltimaCiudad } from './storage.js';
import { obtenerClimaActual, obtenerPronostico } from './api.js';
import { procesarClimaActual, procesarPronostico } from './weatherService.js';
import { mostrarClimaActual, mostrarPronostico } from './ui.js';

// 2. FUNCIÓN DE BÚSQUEDA
async function realizarBusqueda() {
    const ciudad = inputCiudad.value.trim();

    if (!ciudad) {
        alert('Por favor, ingresa el nombre de una ciudad.');
        return;
    }

    try {
        const datosClimaCrudos = await obtenerClimaActual(ciudad);
        const datosPronosticoCrudos = await obtenerPronostico(ciudad);

        const climaLimpio = procesarClimaActual(datosClimaCrudos);
        const pronosticoLimpio = procesarPronostico(datosPronosticoCrudos);

        mostrarClimaActual(climaLimpio);
        mostrarPronostico(pronosticoLimpio);

        // Guardamos la última ciudad buscada con éxito
        guardarUltimaCiudad(ciudad);

        inputCiudad.value = '';
    } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
        alert('No se pudo obtener la información del clima. Por favor, verifica el nombre de la ciudad e intenta nuevamente.');
    }
}

// 3. EXPORTACIÓN DE EVENTOS
export function inicializarEventos() {
    btnBuscar.addEventListener('click', realizarBusqueda);

    inputCiudad.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            realizarBusqueda();
        }
    });
}