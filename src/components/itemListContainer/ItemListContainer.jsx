import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { products } from '../products/Products'
import './ItemListContainer.css';

export const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);

    const getProducts = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000)
    })

    useEffect(() => {
        getProducts()
            .then(products => setProductList(products))
            .catch(error => console.error(error))
    }, [])

    return (
        <ItemList productList={productList} />
    )
}


