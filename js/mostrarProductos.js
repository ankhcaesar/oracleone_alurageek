import { conexionAPI } from "./conexionAPI.js";

/**trae los datos del html para interactuar*/
const lista = document.querySelector("[data-lista]");
const msj = document.querySelector("[data-msj]");

function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("li");
    producto.className = "card";
    producto.id = `${id}`;
    producto.innerHTML = `<img src="${imagen}" />
    <div class="card-container--info">
        <p>${nombre}</p>
        <div class="card-container--value">
            <p>$ ${precio}</p>
                <button class="boton_borrar" data-id><img src="./img/trashIcon.svg"></button>
        </div>
    </div>`;
    return producto;
}

async function listarProductos() {
    try {
        const listaAPI = await conexionAPI.listarProductos();
        if (listaAPI.length == 0) {
            msj.style.display = "flex";
            msj.innerHTML = `<h1 class="productos__mensaje">no se han agregado productos</h1>`;
        } else {
            listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.id)));
            msj.style.display = "none";
        }
    } catch {
        msj.innerHTML = `<h1 class="productos__mensaje">No fue posible cargar la lista de videos</h1>`;
    }
}
listarProductos();

export { crearCard, listarProductos }