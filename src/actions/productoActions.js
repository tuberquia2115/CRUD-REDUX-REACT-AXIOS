import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO
} from '../types'

// crear nuevos productos

export function crearNuevoProductoAction(producto){
    return () => {
        console.log("esta es la data del producto",producto)
    }
}