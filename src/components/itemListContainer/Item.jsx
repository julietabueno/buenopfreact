import React from 'react'
/* import { ItemCountHook } from '../ItemCount/ItemCountHook' */
import Swal from 'sweetalert2'
import './ItemListContainer.css'
import { Link } from 'react-router-dom'

export const Item = ({ id, name, lastname, nickname, city, profesion, image, logo, price, description, category, stock }) => {

    function onAdd(count) {
        Swal.fire({
            title: 'Listo!',
            text: `Agregaste ${count} LEGOS al carrito.`,
            imageUrl: 'https://w7.pngwing.com/pngs/10/228/png-transparent-yellowlego-character-lego-marvel-super-heroes-lego-minifigure-scalable-graphics-lego-s-text-smiley-emoticon.png',
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Custom image',
        })
    }

    return (
        <div className='classContainer' key={id}>
            <div className='container'>
                <h1>Me llamo<strong> {nickname}</strong></h1>
                <h2>Vivo en {city}</h2>
                <img className='imgLego' src={image} alt={nickname} />
                <h3>Nombre de pila: {name} {lastname}</h3>
                <h4>Profesión: {profesion}</h4>
                <h5>Colección: {category}</h5>
                {/*   <ItemCountHook stock={stock} initial={1} onAdd={onAdd} /> */}
                <Link to={`/details/${id}`}>
                    <button className='btn'>Conocé más de {nickname}</button>
                </Link>
            </div>
        </div>
    )
}



