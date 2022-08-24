import React from 'react'
import { useItemCount } from '../hooks/useItemCount'
import "./ItemCount.css"


export const ItemCountHook = ({ stock, onAdd }) => {
    const { add, substract, count } = useItemCount(stock)
    return (
        < div >
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

