import './App.css';
import React from 'react';
import { NavBar } from './fragment/NavBar';
import { ItemListContainer } from './fragment/itemListContainer/ItemListContainer';




function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer nickname="Batman" name="Bruce" lastname="Wayne" city="Ciudad Gotica" />
    </div>
  );
}

export default App;
