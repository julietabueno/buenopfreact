import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Hooks/CartContext'
import { Order } from './Order'
import { ItemCart } from './ItemCart'
import './Cart.css'

export const Cart = ({ item }) => {
    const { cart, getTotal, getQuantity } = useContext(CartContext);
    console.log(cart)
    if (cart.length === 0) {
        return (
            <div className='container-fluid'>
                <div className='containerCarritoVacio'>
                    <div className="card text-bg-secondary mb-3 cardCarritoVacio" style={{ maxWidth: '35rem' }}>
                        <div className="card-header">  <Link to="/" className='cardCarritoVacio1'>Ir al catalogo de LEGO</Link></div>
                        <div className="card-body text-dark">
                            <h5 className="card-title cardCarritoVacio2">Tu carrito esta vacío</h5>
                            <p className="card-text cardCarritoVacio3">Todavía no agregaste Legos a tu carrito.</p>
                        </div>
                    </div>
                </div>
            </div>);

    }
    return (
        <div className="container-fluid">
            <div className='itemCart'>
                <div className='itemDetailCart'>
                    {cart.map((item) => (
                        <ItemCart key={item.id} item={item} />
                    ))}
                </div>
                <div className='orderDetail'>
                    <Order getTotal={getTotal} getQuantity={getQuantity} />
                </div>
            </div>
        </div>
    );
};

