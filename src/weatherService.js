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
// SE AGRUPAN LOS DATOS POR DIA Y SE DEVUELVE UN NUEVO OBJETO CON LOS DATOS LIMPIOS
    const diasAgrupados = {};
    datos.list.forEach(item => {
    // SE EXTRAE SOLO LA FECHA (YYYY-MM-DD) DEL CAMPO dt_txt
        const fecha = item.dt_txt.split(' ')[0];

        if (!diasAgrupados[fecha]) {
            diasAgrupados[fecha] = [];
        }
        diasAgrupados[fecha].push(item);
}); 

// SE OBTIENEN LAS FECHAS Y SE DESCARTA EL DÍA DE HOY (PRIMERA FECHA) PARA MOSTRAR SOLO LOS PRONOSTICOS DE LOS SIGUIENTES 5 DÍAS
    const fechas = Object.keys(diasAgrupados).slice(0,6);

// SE PROCESAN LOS DATOS DE CADA DÍA PARA OBTENER LA TEMPERATURA MÁXIMA Y MÍNIMA DEL DÍA, ASÍ COMO LA DESCRIPCIÓN Y EL ICONO DEL CLIMA
    return fechas.map(fecha=> {
        const lecturasDia = diasAgrupados[fecha];
    //SE OBTIENEN TODAS LAS TEMPERATURAS DEL DIA
        const temperaturas = lecturasDia.map(l => l.main.temp);


    // SE OBTIENE LA TEMPERATURA MÁXIMA Y MÍNIMA DEL DÍA
        const tempMax = Math.round(Math.max(...temperaturas));
        const tempMin = Math.round(Math.min(...temperaturas));
    
    // SE OBTIENE LA DESCRIPCIÓN Y EL ICONO DEL MEDIO DIA 
        const lecturaMedioDia = lecturasDia[Math.floor(lecturasDia.length / 2)];

    // SE FORMATEA EL NOMBRE DEL DÍA
        const fechaObj = new Date(fecha + 'T00:00:00');
        const diaNombre = fechaObj.toLocaleDateString('es-ES', { weekday: 'long' });

        return {
            dia: diaNombre.charAt(0).toUpperCase() + diaNombre.slice(1),
            tempMax, 
            tempMin,
            icono: lecturaMedioDia.weather[0].icon,
            descripcion: lecturaMedioDia.weather[0].description
        };
    });
};
