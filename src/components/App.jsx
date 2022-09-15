import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from './navBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Cart/Cart';
import { CartProvider } from "../hooks/CartContext"
import { Footer } from './footer/Footer';
/* import Searcher from "./components/navbar/Searcher";
import { Carroussel } from "./components/Carroussel/Carroussel";*/


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className='app'>

          <NavBar />
          <Routes>
            <Route path='/' element={<div className='appListContainer'><ItemListContainer /></div>} />
            <Route path='/categoria/:categoria' element={<div className='appListContainer'><ItemListContainer /></div>} />
            <Route path='/details/:id' element={<div className='appDetailContainer'><ItemDetailContainer /></div>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;