import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import "./firebase/config"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App nombre="Julieta" />

);