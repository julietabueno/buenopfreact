import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../Hooks/CartContext'


export const Order = () => {
    const { getTotal, getQuantity, clearCart } = useContext(CartContext);

    return (

        <div class="card text-center">
            <div class="card-header">
                Carrito ({getQuantity()})
            </div>
            <div class="card-body">
                <p class="card-text">Agregaste {getQuantity()} productos</p>
                <p class="card-text">Total con envío ${getTotal()}</p>

                <Link to='/Checkout'>
                    <a className="btn btn-outline-primary"> Finalizar compra</a>
                </Link>
                <a className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</a>
            </div>
            <div class="card-footer">
                <p class="card-text">Formas de Pago</p>
                <img className="mPago" src="https://firebasestorage.googleapis.com/v0/b/lego-app-e4d06.appspot.com/o/mdepago.png?alt=media&token=8a86aa9f-dee5-4bc4-9155-6b50aebe417c" alt="Metodos de pago" />
            </div>
        </div>

    );
};


