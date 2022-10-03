import React, { useState, useContext } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Hooks/CartContext'


export const ItemDetail = ({ item }) => {

    console.log({ item })
    //Aca se setea si el user hace la compra o no. Traigo la funcion del context
    const { addToCart } = useContext(CartContext);
    //indico si el usuario realizo la compra
    const [goToCart, setGoToCart] = useState(false);

    //recibo de itemCount la cantidad y de la paso a la funcion addToCart
    const onAdd = (count) => {
        //recibo la info del itemCount y la se la paso a addToCart
        setGoToCart(true);
        addToCart(item, count);
        let stock = item.stock - count
        item.stock = stock
        Swal.fire({
            title: 'Felicitaciones!',
            text: `Agregaste ${count} ${item.nickname} al carrito: ${item.name} ${item.lastname}`,
            imageUrl: `${item.image}`,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    };

    return (
        <div className='DetailContainer container-fluid' key={item.id}>
            <div className='container-fluid'>
                <div className='row '>
                    <div className='col contDetailImg'>
                        <img className='imgLego' src={item.image} alt={item.nickname} />
                        <h2>Precio: ${item.price}</h2>
                        <h3 className='coleccion'>Coleccion: {item.category}</h3>
                    </div>
                    <div className='col contDetailDesc justify-content-center'>
                        <h1><strong> {item.nickname}</strong></h1>
                        <p className='description'>Descripción: {item.description}</p>
                        <div>
                            <img className='imglogo' src={item.logo} alt={item.category} />

                        </div>
                        <div className="d-grid gap-2">
                            {goToCart ? (<Link to="/Cart" className="btn " type="button">
                                Ir a mi carrito
                            </Link>
                            ) :
                                <ItemCount stock={item.stock} onAdd={onAdd} />
                            }
                            <Link to="/" className="btn btn-lg btn-dark mt-2 " type="button"  >
                                Seguir Comprando
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}