import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../hooks/CartContext'
import { Order } from './Order'
import { ItemCart } from './ItemCart'
import './Cart.css'

export const Cart = ({item}) => {
    const { cart, getTotal, getQuantity , clearCart} = useContext(CartContext);
    console.log(cart)
    if (cart.length === 0) {
        return (
            <>
                <div class="container text-center">
                    <div class="row">
                        <div class="col p-5 m-5">
                            <h2>Todavía no agregaste Legos a tu carrito</h2>
                            <Link to="/"><h3>Ir al catalogo de LEGO</h3></Link>
                        </div>
                    </div>
                </div>
            </>
        );

    }
    return (
        <div className='container-fluid'>
            {cart.map((item) => (
                <ItemCart key={item.id} item={item} />
            ))}
            <Order getTotal={getTotal} getQuantity={getQuantity}/>
          
        </div>
    );
};

