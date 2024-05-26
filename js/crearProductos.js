import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]")

async function crearproductos(evento){
    EventCounts.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    try {await conexionAPI.crearproductos(nombre,precio,imagen)
        alert("se pudo hacer la carga")
        
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener.apply("submit",evento=>crearproductos(evento));