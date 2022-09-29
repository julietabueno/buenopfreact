import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader'


export const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const { categoria } = useParams()


    /* Traigo la info de los productos de Firebase con el ID automatico */
    useEffect(() => {
        try {
            const querydb = getFirestore();
            const queryCollection = collection(querydb, "productos");

            if (categoria) {
                const queryFilter = query(queryCollection, where('category', "==", categoria))
                getDocs(queryFilter)
                    .then(res => setProductList(res.docs.map(item => ({ id: item.id, ...item.data() }))))
            } else {
                getDocs(queryCollection)
                    .then(res => setProductList(res.docs.map(item => ({ id: item.id, ...item.data() }))))
            }
        } catch (error) {
            console.log(error)
        }
    }, [categoria])

    return (
        <>
            {
                productList.length ? < ItemList productList={productList} /> : <Loader />
            }
        </>
    )
}
