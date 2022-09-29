import React, { useContext } from 'react'
import { CartContext } from '../../Hooks/CartContext'



export const ItemCart = ({ item }) => {
    const { removeFromCart } = useContext(CartContext);
    console.log({ item })
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.image} alt={item.nickname} className=" imgCart img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.nickname}</h5>
                            <p className="card-text">Cantidad:{item.quantity}</p>
                            <p className="card-text">Precio Unitario: ${item.price}</p>
                            <p className="card-text"><small className="text-muted">Subtotal:${item.quantity * item.price}</small></p>
                        </div>

                    </div>
                    <div className='itemTrash'>
                        <i onClick={() => removeFromCart(item.id)} className="fa-solid fa-trash-can" />
                    </div>
                </div>
            </div>
        </>)

}
