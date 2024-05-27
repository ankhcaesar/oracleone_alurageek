const ulProductos = document.querySelector('.productos__cards'); //Este es el ul donde se agregan los elentos li (productos)

ulProductos.addEventListener('click', evento => { //Se define el click
    var dato = document.querySelector('.productos__cards li').id
    borrarProducto(dato);
});

async function borrarProducto(id) {

    try {
        const response = await fetch(`http://localhost:3001/productos/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error("Error al eliminar producto");
        }
        const productoBorrado = await response.json();
        return productoBorrado;
    } catch (e) {
        throw new Error("Error de conexion");
    }
}
export { borrarProducto }