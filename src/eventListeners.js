// SE IMPORTAN LOS ELEMENTOS QUE SE NECESITAN DEL DOM

import {inputCiudad, btnBuscar} from './dom.js';
import {obtenerClimaActual} from './api.js';
import {procesarClimaActual} from './weatherService.js';
import {mostrarClimaActual} from './ui.js';

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
// Se ejecuta el flujo completo: obtener datos crudos, procesarlos y mostrarlos en la UI
        const datosCrudos = await obtenerClimaActual(ciudad);
        const datosLimpios = procesarClimaActual(datosCrudos);
        mostrarClimaActual(datosLimpios);
// Se limpia el input para que quede vacío después de la búsqueda
        inputCiudad.value = '';
    } catch (error) {
        alert('No se pudo obtener el clima para la ciudad ingresada. Por favor, verifica el nombre e intenta nuevamente.');
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