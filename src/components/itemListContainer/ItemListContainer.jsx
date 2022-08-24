import React from 'react'
import { ItemCountHook } from '../ItemCount/ItemCountHook'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import './ItemListContainer.css'


export const ItemListContainer = ({ nickname, name, lastname, city, category = "Super Heroe" }) => {

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
        <div className='classContainer'>
            <h1>Hola {nickname}</h1>
            <h2>Bienvenido a {city}</h2>
            <img className='imgBatman' src="https://cdn-icons-png.flaticon.com/512/1674/1674291.png" alt="" />
            <h3>Nombre de pila: {name} {lastname}</h3>
            <h4>Profesión: {category}</h4>
            <ItemCountHook stock={10} initial={1} onAdd={onAdd} />
        </div>
    )
}
