import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from './navBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { CartView } from './CartView/CartView';
import { CartProvider } from "../hooks/CartContext"



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className='app'>
          <NavBar />
          <Routes>
            <Route path='/' element={<div className='appListContainer'><ItemListContainer /></div>} />
            <Route path='/categoria/:categoria' element={<div className='appListContainer'><ItemListContainer /></div>} />
            <Route path='/details/:id' element={<div className='appDetailContainer'><ItemDetailContainer /></div>} />
            <Route path="/cart" element={<CartView />} />
          </Routes>
          <NavBar />
        </div>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;