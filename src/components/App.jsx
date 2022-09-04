import React from 'react';
import './App.css';
import { NavBar } from './navBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className='app'>
      <NavBar />
      <div className='appListContainer'>
        <ItemListContainer />
        </div>
        <div className='appDetailContainer'>
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
