import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
import { useHistory } from 'react-router-dom'

const EditarProducto = () => {

    // usando el hooks de useHistory
    const history = useHistory()

    // nuevo producto editar
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: '',
        cantidad: '',
        tipoProducto: ''
    })

    // producto a editar
    const productoEditar = useSelector(state => state.productos.productoeditar);
    const dispatch = useDispatch();



    useEffect(() => {
        guardarProducto(productoEditar);
    }, [productoEditar])

    // leer  los datos del formulario

    const onChangeFormulario = e => {
        guardarProducto({
            ...producto, [e.target.name]: e.target.value
        })
    }

    const { nombre, precio, cantidad, tipoProducto } = producto

    const submitEditarProducto = (e) => {
        e.preventDefault();
        dispatch(editarProductoAction(producto))

        history.push('/')


    }


    return (
        <div className="rows justify-content-center" style={{ display: 'flex' }}>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                    </h2>
                        <form onSubmit={submitEditarProducto}>
                            <div className="form-group">
                                <label>Nombre producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Cantidad</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Cantidad"
                                    name="cantidad"
                                    value={cantidad}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Tipo de Producto</label>
                                <select
                                    value={tipoProducto}
                                    name="tipoProducto"
                                    className="form-control"
                                    onChange={onChangeFormulario}
                                >
                                    <option value="">--Seleccione un tipo de producto</option>
                                    <option value="Frutas">Frutas</option>
                                    <option value="Víveres">Víveres</option>
                                </select>

                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase 
                        d-block w-100"
                            >Guardar cambios </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default EditarProducto;