import './App.css';
import React from 'react';
import { NavBar } from './navBar/NavBar';
import { ItemListContainer } from './itemListContainer/ItemListContainer';




function App() {
  return (
    <div>
      <NavBar />
      <div className='ItemListContainer'>
        <ItemListContainer nickname="Batman" name="Bruce" lastname="Wayne" city="Ciudad Gotica" />
      </div>
    </div>
  );
}

export default App;
