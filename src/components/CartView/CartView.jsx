import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../hooks/CartContext'
import { Order } from './Order'



export const CartView = () => {
    const { cart, removeFromCart, getTotal } = useContext(CartContext);
   /*  const [empty, setEmpty] = useState(true);
    const [showOrder, setShowOrder] = useState(true);

    useEffect(() => {
        if (cart.length === 0) {
            setEmpty(true);

        } else {
            setEmpty(false);
        }
    }, [cart.length]);

 */
    return (
        <div>
            <Order />
        </div>
    )
}

