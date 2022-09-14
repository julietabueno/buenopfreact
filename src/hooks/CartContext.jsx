import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

//extraigo el provider del cart context para pasar por props lo que voy a usar del contexto
const { Provider } = CartContext

/* Ejemplo de mi carrito

const Cart =[
    {
        item:  {
            nombre: "Spiderman",
            precio: "u$s8" ,
            id: id
        },
        quantity: 6
    },
    {
        item:  {
            nombre: "Spiderman",
            precio: "u$s8" ,
        },
        quantity: 6
    },
    {
        item:  {
            nombre: "Spiderman",
            precio: "u$s8" ,
        },
        quantity: 6
    },
    */

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);


    //creo la fn para vaciar el carrito
    const clearCart = () => {
        setCart([]);
    }

    //creo la fn para agregar al carrito
    const addToCart = (item, quantity) => {
        console.log(item)
        //chequeo si el item ya esta en el carrito para sumarle la cantidad si esta y si no, agregarlo
        if (isInCart(item.id)) {
            const newCart = [...cart] //creo la copia del carrito para poder buscar e identificar el producto que quiero sumarle la cantidad
            for (const element of newCart) {
                if (element.item.id === item.id) {
                    element.quantity = element.quantity + quantity;
                }
            }
            setCart(newCart);
        } else {
            setCart(
                [
                    ...cart,
                    {
                        item: item,
                        quantity: quantity
                    }
                ]
            )
        }
    };

    //creo la fn para saber si esta o no en el carrito
    const isInCart = (id) => {
        return cart.find((element) => element.item.id === id);
    };

    //creo la fn para elimiar elementos del carrito
    const removeFromCart = (id) => {
        const newCart = [...cart].filter(element => element.item.id !== id);
        setCart(newCart);
    }

    /* const getQuantity = () => {
        let cantidad = 0
        cart.forEach((element) => cantidad = cantidad + element.quantity)
        return cantidad
    }

    const getTotal = () => {
        let total = 0
        cart.forEach((element) => {
            total = total + (element.quantity * element.item.price)
        })
        return total
    } */
    
    //exporto al contexto con todas las funciones que voy a utilizar para agregar, eliminar, vaciar y chequear si esta en el carrito
    const context = {
        cart,
        clearCart,
        addToCart,
        removeFromCart
        /*        getQuantity,
            getTotal */
    }


    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}
