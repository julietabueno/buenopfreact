import { React, useState, useEffect } from 'react'
import { ItemCountHook } from '../ItemCount/ItemCountHook'
import Swal from 'sweetalert2'
import '../ItemListContainer/ItemListContainer.css'
import { items } from '../ItemListContainer/Item'

function consPromise(conf) {
    return new Promise((res, rej) => {
        if (conf) {
            res(items)
        } else {
            rej("No tenes acceso")
        };
    })
}

export const ItemList = () => {
    const [items, setProducts] = useState([])
    function onAdd(count) {
        Swal.fire({
            title: 'Listo!',
            text: `Agregaste ${count} LEGOS al carrito.`,
            imageUrl: 'https://w7.pngwing.com/pngs/10/228/png-transparent-yellowlego-character-lego-marvel-super-heroes-lego-minifigure-scalable-graphics-lego-s-text-smiley-emoticon.png',
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Custom image',
        })
    }
    useEffect(() => {
        consPromise(true)
            .then(data => {
                const itemsJSX = data.map((items) =>
                    <div className='classContainer' key={items.id}>
                        <div className='container'>
                            <h1>Me llamo<strong> {items.nickname}</strong></h1>
                            <h2>Bienvenido a {items.city}</h2>
                            <img className='imgLego' src={items.image} alt={items.nickname} />
                            <h3>Nombre de pila: {items.name} {items.lastname}</h3>
                            <h4>Profesión: {items.category}</h4>
                            <ItemCountHook stock={10} initial={1} onAdd={onAdd} />
                        </div>
                    </div>
                )
                setProducts(itemsJSX)
            })
            .catch(error => {
                console.error(error)
            })
    }, []);

    return (
        <div className='row'>
            {items}
        </div>
    )
}

