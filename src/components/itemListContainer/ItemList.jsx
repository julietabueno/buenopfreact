import React, {useContext}  from 'react'
import '../ItemListContainer/ItemListContainer.css'
import { Item } from '../ItemListContainer/Item'


export const ItemList = ({ productList }) => {

    return (
        <>
            {productList.map(item =>
                <Item key={item.id} {...item} />)
            }
        </>
    )
}