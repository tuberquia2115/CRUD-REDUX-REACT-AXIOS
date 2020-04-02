import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO
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
                icon:'error',
                title:'Hubo un error',
                text:'hubo un error, Intenta de nuevo'
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