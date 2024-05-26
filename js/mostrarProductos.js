import { conexionAPI } from "./conexionAPI.js";

/**trae los datos del html para interactuar*/
const lista = document.querySelector("[data-lista]");
const msj = document.querySelector("[data-msj]");


function crearCard(nombre, precio, imagen) {
    const producto = document.createElement("li");
    producto.className = "card";
    producto.innerHTML = `<img src="${imagen}" />
    <div class="card-container--info">
        <p>${nombre}</p>
        <div class="card-container--value">
            <p>$ ${precio}</p>
            <img src="./img/trashIcon.svg">
        </div>
    </div>`;

    return producto;
}

async function listarProductos() {

    try{
        const listaAPI = await conexionAPI.listarProductos();
        if(listaAPI.length ==0){
            msj.style.display ="flex";
            msj.innerHTML=`<h1 class="productos__mensaje">no se han agregado productos</h1>`;
        }else{
            listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen)));
        msj.style.display ="none";
        }
    }catch{
        msj.innerHTML=`<h1 class="productos__mensaje">No fue posible cargar la lista de videos</h1>`;
    }
}
listarProductos();