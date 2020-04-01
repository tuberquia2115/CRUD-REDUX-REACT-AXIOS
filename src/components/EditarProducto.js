import React from 'react';

const EditarProducto = () => {
    return(
        <div className="rows justify-content-center" style={{display:'flex'}}>
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Editar producto
                    </h2>
                    <form>
                        <div className="form-group">
                            <label>Nombre producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre producto"
                                name="nombre"
                            />
                        </div>
                        <div className="form-group">
                            <label>Precio producto</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Precio producto"
                                name="precio"
                            />
                        </div>
                        <div className="form-group">
                            <label>Cantidad</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Cantidad"
                                name="cantidad"
                            />
                        </div>
                        <div className="form-group">
                            <label>Tipo de Producto</label>
                            <select value="" name="tipoProducto" className="form-control">
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