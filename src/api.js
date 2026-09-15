// API KEY

const API_KEY = "1810fdf532f74755507b6e3d6fe190d8";


// CREAR FUNCION Y EXPORTARLA

export async function obtenerClimaActual(ciudad) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;
// SE HACE LA PETICIÓN A LA API 
    const respuesta = await fetch(url);
// SE OBTIENE LA RESPUESTA EN FORMATO JSON
    const datos = await respuesta.json();
// SE RETORNA LOS DATOS
    return datos;
}

// PETICIÓN DEL PRONOSTICO

export async function obtenerPronostico(ciudad) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
}