import React, { useState, useEffect } from 'react'
import { getFirestore, doc, getDoc, } from 'firebase/firestore';
import { useParams } from 'react-router-dom'
import { Loader } from '../Loader/Loader'
/* import { products } from '../products/Products' */
import { ItemDetail } from './ItemDetail.jsx'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const { id } = useParams()

    useEffect(() => {
        try {
            const querydb = getFirestore();
            const queryDoc = doc(querydb, "productos", id);
            getDoc(queryDoc)
                .then(res => setItem({ id: res.id, ...res.data() }))
        } catch (error) {
            console.log(error)
        }
    }, [id])

    return (
        <>
            {
                item ? < ItemDetail item={item} /> : <Loader />
            }
        </>
    )
}