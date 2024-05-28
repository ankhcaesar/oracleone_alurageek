const urlApi = "http://localhost:3001/productos";
async function borrarProducto(id) {
    return await fetch(`${urlApi}/${id}`,{
        method: "DELETE"
    });
}
export { borrarProducto }