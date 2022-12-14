import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from './NavBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Cart/Cart';
import { CartProvider } from "../Hooks/CartContext"
import { Footer } from './Footer/Footer';
import { Checkout } from './Cart/Checkout';
import { Contact } from './Contact/Contact';



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className='app container-fluid'>

          <NavBar />
          <Routes>
            <Route path='/' element={<div className='appListContainer'><ItemListContainer /></div>} />
            <Route path='/categoria/:categoria' element={<div className='appListContainer'><ItemListContainer /></div>} />
            <Route path='/details/:id' element={<div className='appDetailContainer'><ItemDetailContainer /></div>} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;