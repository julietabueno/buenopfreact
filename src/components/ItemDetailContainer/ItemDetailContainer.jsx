import React, {useState, useEffect} from 'react'
import { products } from '../products/Products'
import { ItemDetail } from './ItemDetail.jsx'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const getProduct = () => new Promise((res, rej) => {
        setTimeout(() => res(products.find(product => product.id === 2)), 2000)
    })
    useEffect(() => {
        getProduct()
            .then(res => setItem(res))
    }, [])

    return (
        <ItemDetail item={item} />
    )
}
