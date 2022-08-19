import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({ nickname, name, lastname, city, category = "Super Heroe" }) => {

    return (
        <div className='classContainer'>
            <h1>Hola {nickname}</h1>
            <h2>Bienvenido a {city}</h2>
            <img className='imgBatman' src="https://cdn-icons-png.flaticon.com/512/1674/1674291.png" alt="" />
            <h3>Nombre de pila: {name} {lastname}</h3>
            <h4>Trabajo: {category}</h4>
        </div>
    )
}
