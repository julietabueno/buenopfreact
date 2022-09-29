import React, { createContext, useState } from 'react';

export const CartContext = createContext();

//extraigo el provider del cart context para pasar por props lo que voy a usar del contexto
const { Provider } = CartContext

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);

    //creo la fn para vaciar el carrito
    const clearCart = () => setCart([]);

    //creo la fn para agregar al carrito
    const addToCart = (item, quantity) => {
        //chequeo si el item ya esta en el carrito para sumarle la cantidad si esta y si no, agregarlo
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity }]) //Si no está el item lo agrego y le sumo el campo quantity
        }
    };

    //creo la fn para saber si esta o no en el carrito
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    //creo la fn para elimiar elementos del carrito
    const removeFromCart = (id) => setCart(cart.filter(product => product.id !== id));

    const getQuantity = () => cart.reduce((collector, product) => collector + product.quantity, 0);

    const getTotal = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    //exporto al contexto con todas las funciones que voy a utilizar para agregar, eliminar, vaciar y chequear si esta en el carrito
    const context = {
        cart,
        clearCart,
        addToCart,
        isInCart,
        removeFromCart,
        getQuantity,
        getTotal,
    }


    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}
