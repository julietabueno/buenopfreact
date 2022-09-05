import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { products } from '../products/Products'
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { Loader } from '../Gif/Loader'


export const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const { categoria } = useParams()

    console.log(categoria)
    const getProducts = () => new Promise((res, rej) => {
        if (categoria) {
            setTimeout(() => res(products.filter(item => item.category === categoria)), 2000)
        } else {
            setTimeout(() => res(products), 2000)
        }
    })


    useEffect(() => {
        getProducts()
            .then(products => setProductList(products))
            .catch(error => console.error(error))
            return () =>{
                setProductList([])
            }
    }, [categoria])

    return (
        <>
            {
                productList.length ? < ItemList className="divListContainer" productList={productList} /> : <Loader />
            }
        </>
    )
}


