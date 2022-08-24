import React from 'react'
import { ItemCountHook } from '../ItemCount/ItemCountHook'
import './ItemListContainer.css'


export const ItemListContainer = ({ nickname, name, lastname, city, category = "Super Heroe" }) => {

    function onAdd(count) {
        console.log(`felicitaciones agregaste ${count}`)
    }
    return (
        <div className='classContainer'>
            <h1>Hola {nickname}</h1>
            <h2>Bienvenido a {city}</h2>
            <img className='imgBatman' src="https://cdn-icons-png.flaticon.com/512/1674/1674291.png" alt="" />
            <h3>Nombre de pila: {name} {lastname}</h3>
            <h4>Profesión: {category}</h4>
            <ItemCountHook stock={10} initial = {1} onAdd={onAdd}/>
        </div>
    )
}
