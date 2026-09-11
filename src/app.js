import {obtenerClimaActual} from './api.js';
import {procesarClimaActual} from './weatherService.js';
import {mostrarClimaActual} from './ui.js';


obtenerClimaActual("la estrella").then(datosCrudos => {
    const datosLimpios = procesarClimaActual(datosCrudos); 
    mostrarClimaActual(datosLimpios);
});