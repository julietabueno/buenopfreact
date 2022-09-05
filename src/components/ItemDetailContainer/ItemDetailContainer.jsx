import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../Gif/Loader'
import { products } from '../products/Products'
import { ItemDetail } from './ItemDetail.jsx'

export const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, setItem] = useState()

    const getProduct = () => new Promise((res, rej) => {
        setTimeout(() => res(products.find(product => product.id === Number(id))), 2000)
    })

    useEffect(() => {
        getProduct()
            .then(res => setItem(res))
    }, [])

    return (
        <>
            {
                item ? < ItemDetail item={item} /> : <Loader />
            }
        </>
    )
}
