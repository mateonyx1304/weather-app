// FUNCION PARA LIMPIAR LOS DATOS DEL CLIMA ACTUAL

export function procesarClimaActual(datos) {
    return {
        ciudad: datos.name,
        temperatura: Math.round(datos.main.temp),  // Math.round redondea decimales (ej: 23.8 -> 24)
        sensacion: Math.round(datos.main.feels_like),
        humedad: datos.main.humidity,
        viento: datos.wind.speed,
        presion: datos.main.pressure,
        visibilidad: datos.visibility / 1000,  // Lo convertimos de metros a kilómetros
        descripcion: datos.weather[0].description,
        icono: `https://openweathermap.org/img/wn/${datos.weather[0].icon}.png`
    }
}

// LLAMAMOS LA FUNCION PROCESAR PRONOSTICO PARA LIMPIAR LOS DATOS DEL PRONOSTICO

export function procesarPronostico(datos) {
//  SE FILTRA PARA TOMAR SOLO LA INFORMACIÓN QUE NECESITAMOS (CERCA DEL MEDIO DIA)
    const pronosticoDiario = datos.list.filter(item => item.dt_txt.includes("12:00:00"));

    return pronosticoDiario.map(item => {
    // CONVERTIMOS LA FECHA EJ: 15-09/2026 -> SÁBADO
        const fecha = new Date(item.dt * 1000); 
        const diaNombre = fecha.toLocaleDateString('es-ES', { weekday: 'long' });

        return {
            dia: diaNombre.charAt(0).toUpperCase() + diaNombre.slice(1),  // Capitalizamos la primera letra
            tempMax: Math.round(item.main.temp_max),
            tempMin: Math.round(item.main.temp_min),
            descripcion: item.weather[0].description,
            icono: item.weather[0].icon
        };
    });
}