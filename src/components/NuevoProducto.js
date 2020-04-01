import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// action de redux

import { crearNuevoProductoAction } from '../actions/productoActions';


const NuevoProducto = () => {

    // state del componente 
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: 0,
        cantidad: '',
        tipoProducto: ''
    })

    // realizar destrutirin 
    const { nombre, precio, cantidad, tipoProducto } = producto

    // utilizar use dispatch y te crea una función
    const dispatch = useDispatch()

    // mandar a llamar el actions de productoActions.js
    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto))

    // capturar valores
    const onChange = e => {
        guardarProducto({ ...producto, [e.target.name]: e.target.value })
    }

    const submitNuevoProducto = e => {
        e.preventDefault();

        //validar formulario
        if (nombre.trim() === '' ||
            precio.trim() === '' ||
            cantidad.trim() === '' ||
            tipoProducto.trim() === '') {
            return;
        }


        // si no hay errores


        // crear el nuevo producto
        agregarProducto(producto);

    }
    return (
        <div className="rows justify-content-center" style={{ display: 'flex' }}>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>
                        <form onSubmit={submitNuevoProducto}>
                            <div className="form-group">
                                <label>Nombre producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Tipo de Producto</label>
                                <select
                                    defaultValue={tipoProducto}
                                    name="tipoProducto"
                                    onChange={onChange}
                                    className="form-control">
                                    <option value="">--Seleccione un tipo de producto</option>
                                    <option value="Frutas">Frutas</option>
                                    <option value="Víveres">Víveres</option>
                                </select>

                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase 
                            d-block w-100"
                            >Agregar </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NuevoProducto;