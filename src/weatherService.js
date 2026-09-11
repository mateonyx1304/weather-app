// FUNCION PARA LIMPIAR LOS DATOS DEL CLIMA ACTUAL

export function procesarClimaActual(datos) {
    return {
        ciudad: datos.name,
        temperatura: Math.round(datos.main.temp),
        sensacion: Math.round(datos.main.feels_like),
        humedad: datos.main.humidity,
        viento: datos.wind.speed,
        presion: datos.main.pressure,
        visibilidad: datos.visibility / 1000,
        descripcion: datos.weather[0].description,
        icono: `https://openweathermap.org/img/wn/${datos.weather[0].icon}.png`
    }
}