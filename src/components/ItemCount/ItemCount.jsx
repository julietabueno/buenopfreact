import React, { useContext, useEffect, useState } from 'react'
import { useItemCount } from '../../hooks/UseItemCount'
import "./ItemCount.css"


export const ItemCount = ({ stock, onAdd }) => {
    const { add, substract, count } = useItemCount(stock)

    return (
        < div className='itemCount'>
            <div className='itemCountBox'>
                <button className='btn' onClick={() => { add(count) }}>
                    +
                </button>
                <p>
                    {count}
                </p>
                <button className='btn' onClick={() => { substract(count) }}>
                    -
                </button>
            </div>
            <button className='btn' onClick={() => onAdd(count)}>Agregar al carrito</button>
            <h3> Stock : {stock}</h3>
        </ div>
    )
}