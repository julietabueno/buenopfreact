import React, { useState, useContext } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../hooks/CartContext'


export const ItemDetail = ({ item }) => {

    //Aca se setea si el user hace la compra o no. Traigo la funcion del context
    const {addToCart} = useContext(CartContext);

    //indico si el usuario realizo la compra
    const [purchaseMade, setPurchaseMade] = useState(false);

    //recibo de itemCount la cantidad y de la paso a la funcion addToCart
    const onAdd = (count) => {
        //recibo la info del itemCounty la se la paso a addToCart
        setPurchaseMade(true);
        addToCart(item,count);
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
        <div className='DetailContainer' key={item.id}>
            <div className='cardDetail'>
                <h1><strong> {item.nickname}</strong></h1>

                <img className='imgLego' src={item.image} alt={item.nickname} />
                <div className='cardDetail2'>
                    <h2>Precio: ${item.price}</h2>
                    <h3 className='coleccion'>Coleccion: {item.category}</h3>
                    <p className='description'>Descripción: {item.description}</p>
                    <div>
                        <img className='imglogo' src={item.logo} alt={item.category} />
                    </div>
                </div>

                {purchaseMade ? (<Link to="/Cart" className="btn " type="button">
                    Ir a mi carrito
                </Link>
                ) : <ItemCount stock={item.stock} onAdd={onAdd} />
                }

            </div>
        </div>
    )
}