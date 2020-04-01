import React from 'react';

const Productos = () => {
    return (
        <React.Fragment>
            <h2 className="text-center my-5">Lista de productos</h2>

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

                </tbody>
            </table>
        </React.Fragment>
    )
}
export default Productos;