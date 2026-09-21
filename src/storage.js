// CLAVE PARA GUARDAR LA INFO EN EL DEL NAVEGADOR EN LOCAL STORAGE

const CLAVE_STORAGE="ultimaCiudadClima";

// FUNCION PARA GUARDAR LA INFO EN EL DEL NAVEGADOR EN LOCAL STORAGE

export function guardarUltimaCiudad(ciudad) {
    localStorage.setItem(CLAVE_STORAGE, ciudad);
}

// FUNCION PARA OBTENER LA ULTIMA CIUDAD GUARDADA

export function obtenerUltimaCiudad(){
    return localStorage.getItem(CLAVE_STORAGE);
}
