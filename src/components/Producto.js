import React from 'react';
import { Link } from 'react-router-dom';

// redux
import {
    useDispatch
} from 'react-redux'
import Swal from 'sweetalert2'

import { borrarProductoAction } from '../actions/productoActions'
const Producto = ({ producto }) => {
    const { nombre, cantidad, precio, tipoProducto, id } = producto

    const dispatch = useDispatch()

    // Confirmar si desea eliminarlo 
    const confirmarEliminarProducto = id => {
        // preguntar al usuario
        Swal.fire({
            title: 'Estas Seguro?',
            text: "Un producto que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Eliminar!!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // pasarlo al action
                dispatch(borrarProductoAction(id));
            }
        })


    }
    return (
        <tr>
            <td>{nombre}</td>
            <td > <span className="font-weight-bold"></span>$ {precio}</td>
            <td>{cantidad}</td>
            <td>{tipoProducto}</td>
            <td className="acciones">
                <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Producto;