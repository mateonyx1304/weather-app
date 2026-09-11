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