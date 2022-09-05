import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './navBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path='/' element={<div className='appListContainer'><ItemListContainer /></div>} />
          <Route path='/categoria/:categoria' element={<div className='appListContainer'><ItemListContainer /></div>} />
          <Route path='/details/:id' element={<div className='appDetailContainer'><ItemDetailContainer /></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
