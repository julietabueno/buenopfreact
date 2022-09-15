import React, { useContext } from 'react'
import { CartContext } from '../../hooks/CartContext'



export const ItemCart = ({ item }) => {
    const { removeFromCart } = useContext(CartContext);
    return (
        <>
        <div className='container-fluid'>
            <div className="card mb-3 px-2">
                <div className="row g-0">
                    <div className="col-2">
                        <img className='imgLego' src={item.image} alt={item.nickname} />
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <div className="card-body">
                            <h5 className="card-title">{item.nickname}</h5>
                        </div>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <div className="card-body">
                            <p>Cantidad:{item.quantity}</p>
                            <p>Precio: ${item.price}</p>
                        </div>
                    </div>
                    <div className="col-1 d-flex align-items-center">
                        <div className="card-body">
                            <p>Subtotal:${item.quantity * item.price}</p>
                        </div>
                    </div>
                    <div className="col-1 d-flex align-items-start">
                        <div className="card-body">
                            <i onClick={() => removeFromCart(item.id)} className="fa-solid fa-trash-can" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
