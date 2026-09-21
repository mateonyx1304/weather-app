import { inicializarEventos } from './eventListeners.js';
import { obtenerUltimaCiudad } from './storage.js';
import { obtenerClimaActual, obtenerPronostico } from './api.js';
import { procesarClimaActual, procesarPronostico } from './weatherService.js';
import { mostrarClimaActual, mostrarPronostico } from './ui.js';

// Activamos los clicks y teclas
inicializarEventos();

// Función de carga inicial
async function cargarEstadoInicial() {
    // Si no hay ciudad guardada, usamos una por defecto
    const ciudadInicial = obtenerUltimaCiudad() || 'Medellin';

    try {
        const datosClima = await obtenerClimaActual(ciudadInicial);
        const datosPronostico = await obtenerPronostico(ciudadInicial);

        mostrarClimaActual(procesarClimaActual(datosClima));
        mostrarPronostico(procesarPronostico(datosPronostico));
    } catch (error) {
        console.error('Error al cargar la ciudad inicial:', error);
    }
}

// Ejecutamos la carga inicial al abrir la página
cargarEstadoInicial();