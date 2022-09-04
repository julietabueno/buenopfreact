import React from 'react'
import { ItemCountHook } from '../ItemCount/ItemCountHook'
import Swal from 'sweetalert2'
import './ItemListContainer.css'


export const Item = ({ id, name, lastname, nickname, city, category, image, price, description, colection, stock }) => {

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
                <h4>Profesión: {category}</h4>
                <ItemCountHook stock={stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}



