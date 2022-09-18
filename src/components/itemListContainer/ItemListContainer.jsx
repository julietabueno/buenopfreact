import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader'


export const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const { categoria } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "productos");
        console.log(getDocs(queryCollection))

        if (categoria) {
            const queryFilter = query(queryCollection, where('category', "==", categoria))
            getDocs(queryFilter)
                .then(res => setProductList(res.docs.map(item => ({ id: item.id, ...item.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setProductList(res.docs.map(item => ({ id: item.id, ...item.data() }))))
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


/*     const getProducts = () => new Promise((res, rej) => {
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
 */