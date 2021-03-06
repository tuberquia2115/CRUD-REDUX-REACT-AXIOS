import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductosAction } from '../actions/productoActions';
import Producto from './Producto';

const Productos = () => {

    // ubtener el dispatch que tiene las acciones,
    const dispatch = useDispatch();

    useEffect(() => {
        // consultar la api
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos()
        // eslint-disable-next-line
    }, [])

    // acceder al state del actions
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);
    return (
        <React.Fragment>
            <h2 className="text-center my-5">Lista de productos</h2>
            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
            {cargando ? <p className="text-center">Cargando...</p> : null}
            <table className="table table-striped">
                <thead className="bg-inherit table table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">cantidad</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length === 0 ? 'No hay productos' : (
                        productos.map(producto => (
                            <Producto
                                key={producto.id}
                                producto={producto} />
                        ))
                    )}
                </tbody>
            </table>
        </React.Fragment>
    )
}
export default Productos;