import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_ERROR,
    PRODUCTO_ELIMINADO_EXITOSO,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_EXITOSO,
    PRODUCTO_EDITAR_ERROR,
    COMENZAR_EDICION_PRODUCTO
} from '../types'
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'
// crear nuevos productos

export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            //inserta en la api
            await clienteAxios.post('/productos', producto);
            // si todo sale bien actualiza el state
            dispatch(agregarProductoExito(producto))

            // alert

            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )
        } catch (error) {
            console.log(error)
            // si hay un error cambiamos el state
            dispatch(agregarProductoError(true))

            // alerta de error

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'hubo un error, Intenta de nuevo'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

// SI EL PRODUCTO SE GUARDA EL LA BASE DE DATOS
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

// función que descarga los productos de la base de datos

export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos())

        try {
            const respuesta = await clienteAxios.get('/productos');
            console.log(respuesta.data);
            dispatch(descargaProductosExitosa(respuesta.data))

        } catch (error) {
            console.log(error);
            dispatch(descargarProductosError())

        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})
const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

// Selecciona y elimina el producto

export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id))
        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExitoso())

            // si se elimina mostrar alerta
            Swal.fire(
                'Eliminado!',
                'EL producto se elimino correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError())

        }

    }
}


const obtenerProductoEliminar = (id) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExitoso = () => ({
    type: PRODUCTO_ELIMINADO_EXITOSO
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})


// colocar producto el edición
export function obtenerProductoEditar(producto) {
    return (dispatch) => {
        dispatch(obtenerProductoEditarAction(producto))
    }
}

const obtenerProductoEditarAction = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

// edita un registro en la api y state

export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch(editarProducto());

        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
            dispatch(editarProductoExitoso(producto))
        } catch (error) {
            console.log(error)
            dispatch(editarProductoError())
        }
    }
}

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
})

const editarProductoExitoso = (producto) => ({
    type: PRODUCTO_EDITAR_EXITOSO,
    payload: producto
})
const editarProductoError = () => ({
    type: PRODUCTO_EDITAR_ERROR,
    payload: true
})