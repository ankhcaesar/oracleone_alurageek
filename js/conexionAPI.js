/**conecta con la api y convinerte los datos a json y devuelve el la base de datos */
async function listarProductos(){
    /*conecta con la api*/
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    /**trae y convierte los datos */
    const conexionConvertida = await conexion.json();

    /** devuelve los datos convertidos */
    return conexionConvertida;
    console.log(conexionConvertida);

}

async function crearProducto(nombre,precio,imagen){

    const conexion= await fetch("http://localhost:3001/productos",{
    method:"POST",
    headers:{
        "Content-type": "application/json"
    },
    body:JSON.stringify({
        nombre:nombre,
        precio:precio,
        imagen:imagen
    })
    })
    if(!conexion.ok){
        throw new Error("No fue posible enviar el video");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}



/**exporta la const conexionAPI que trae los datos generados por la funcion */
export const conexionAPI={
    listarProductos, crearProducto
}

