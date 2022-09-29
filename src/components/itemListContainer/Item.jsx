import React from 'react'
import './ItemListContainer.css'
import { Link } from 'react-router-dom'

export const Item = ({ id, name, lastname, nickname, city, profesion, image, logo, price, description, category, stock }) => {



    return (
        <div className='classContainer' key={id}>
            <div className='container'>
                <h1><strong> {nickname}</strong></h1>
                <h2>Ciudad:  {city}</h2>
                <img className='imgLego' src={image} alt={nickname} />
                <h4>{profesion}</h4>
                <Link to={`/details/${id}`}>
                    <button className='btn'>Conocé más de {nickname}</button>
                </Link>
            </div>
        </div>
    )
}
