import React from 'react';

const Form = () => {
    return (
        <>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Ingrese su búsqueda"  />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </>
    );
}

export default Form;
